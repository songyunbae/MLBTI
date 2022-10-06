import { useEffect, useState } from "react";
import SimulationResult from "../../components/simulation/SimulationResult";

import { simulationData, customsimulationData } from "./simulation-slice";
import { useDispatch } from "react-redux";
import Ground from "./Ground";
import BallCount from "./BallCount";
import TeamScore from "../../components/game/TeamScore";
import { useLocation, useNavigate } from "react-router-dom";

import { SimulContainer, Center } from "./SimulationPage.style";

const SimulationPage = () => {
  const location = useLocation();
  // const home = location.state.home;
  // const away = location.state.away;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = location.state;

  const [matchData, setMatchData] = useState({});
  const [simulData, setSimulData] = useState({});
  // 커스텀 데이터 넘어왔는지 확인
  const [customStatus, setCustomStatus] = useState();
  const logoUrl = [data.home.logo, data.away.logo];

  useEffect(() => {
    // 커스텀팀이 넘어왔을 때, status true로 변환
    if (!data.home.id) {
      // setCustomStatus(true);
      takeCustomSimulData(matchInfo);
    } else {
      takeSimulData(teamId);
    }
    setMatchData(data);
  }, []);

  const teamId = { team1: data.home.id, team2: data.away.id };
  const matchInfo = { email: data.home, uid: data.away.id };

  const takeSimulData = (teamId) => {
    dispatch(simulationData(teamId))
      .unwrap()
      .then((res) => {
        console.log("ressss ", res);
        if (res.data === "") {
          alert("선수 정보가 부족합니다.");
          navigate("/customsimultaion");
        }
        setSimulData(res.data);
      })
      .catch((err) => {
        alert("선수 정보가 부족합니다.");
        navigate("/customsimultaion");
      });
  };

  const takeCustomSimulData = (matchInfo) => {
    dispatch(customsimulationData(matchInfo))
      .unwrap()
      .then((res) => {
        setCustomStatus(false);
      })
      .catch((err) => {
        alert("선수 정보가 부족합니다.");
        navigate("/customsimultaion");
      });
  };

  useEffect(() => {
    if (simulData.gamePk) {
      makeInningsInfo();
    }
  }, [simulData]);

  let innginglist = [];
  let batterlist = [];

  const makeInningsInfo = () => {
    simulData.inngings.map((inning) => {
      inning.datas.map((batter) => {
        batterlist.push(batter);
      });
      innginglist.push(inning);
    });
  };

  return (
    <SimulContainer>
      <TeamScore data={simulData} logo={logoUrl} />
      <Center>
        <Ground data={innginglist} />
        <BallCount data={innginglist} />
      </Center>
      <SimulationResult data={simulData} />
    </SimulContainer>
  );
};

export default SimulationPage;
