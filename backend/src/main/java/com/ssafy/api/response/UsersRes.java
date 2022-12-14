package com.ssafy.api.response;

import javax.persistence.Column;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Users;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserResponse")
public class UsersRes{
	@ApiModelProperty(name="email")
	String email;
	@ApiModelProperty(name="nickname")
	String nickname;
	@ApiModelProperty(name="password")
    String password;
	@ApiModelProperty(name="grade")
	String grade;
	
	public static UsersRes of(Users user) {
		UsersRes res = new UsersRes();
		res.setEmail(user.getEmail());
		res.setNickname(user.getNickname());
		res.setPassword(user.getPassword());
		res.setGrade(user.getGrade());
		return res;
	}
}
