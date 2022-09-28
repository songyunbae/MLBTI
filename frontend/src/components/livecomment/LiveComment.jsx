// import { useEffect, useImperativeHandle } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../api/http";


import {
    LiveCommentContainer,
    CommentBox,
    Bubble,
    CommentSendContainer, 
    CommentText, 
    CommentBtn,
} from "./LiveComment.style";
import { useDispatch } from "react-redux";
import { myprofile } from "../../pages/profile/myprofile-slice";

const LiveComment = () => {

const [typingComments, setTypingComments] = useState('');
const [serverMessageList, setServerMessageList] = useState([]);
const dispatch = useDispatch();

    // 웹소켓
    const webSocket = new WebSocket("ws://localhost:8081/teamName"); 

    const onEnter = (e) => {
        if(e.key === 'Enter'){
            onSendComments();
        }
    }
    const onTypingComments = (event) => {
        setTypingComments(event.target.value);
    }

    webSocket.onmessage = function(message) {
        console.log("서버에서 온 메세지", message);
       
        var data = JSON.parse(message.data);
        const obj = {};
        obj.id = data.id;
        obj.message = data.message;
        
        console.log("obj", obj);
        setServerMessageList([...serverMessageList, obj]);

    }


    const onSendComments = ((e) => {
        const deleteContent = typingComments.trim() === "";
        e.preventDefault();
         webSocket.send(typingComments);
        setTypingComments('');
      
    })

    
    useEffect(()=> {
        webSocket.onopen = function(){
            console.log("서버와 웹소켓 연결 성공");
        };
        dispatch(myprofile()).unwrap().then((res) => {
            console.log("Resssssss ", res);
        })
    }, []);



    return (
        <LiveCommentContainer>
            <CommentBox>
                {serverMessageList.map((comment, index) => {
                    console.log("commnet", comment);
                    if(comment !== null) {
                        return(
                            <Bubble>{comment.message}</Bubble>
                        )
                    }
                
            })}

            </CommentBox>
            <CommentSendContainer>
                <CommentText 
                value={typingComments}
                onChange={onTypingComments}
                onKeyPress = {onEnter}/>
                <CommentBtn onClick={onSendComments}>전송하기</CommentBtn>
            </CommentSendContainer>
        </LiveCommentContainer>
    )
}

export default LiveComment;