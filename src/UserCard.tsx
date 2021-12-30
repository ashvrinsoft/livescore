import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Rank } from "./App";

const ScoreButton = styled.div`
  color: rgb(65, 94, 223);
  font-weight: bold;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SnoDiv = styled.div`
  margin: 4px;
  padding: 1px;
  border-radius: 50%;
  background-color: yellow;
  width: 20px;
  height: 20px;
  display: flex;
  color: gray;
  align-items: center;
  justify-content: center;
  border: 1px solid #bcc6cc;
`;

const AvatarDiv = styled.div`
  margin: 4px;
  color: white;
  border-radius: 50%;
  background-color: orange;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameDiv = styled.div`
  margin: 4px;
`;

const UserCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
  padding: 4px 15px;
  animation: slidein ease 0.7s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes slidein {
    from {
      opacity: 0;
      transform: rotateX(-90deg);
      transition: all 0.5s cubic-bezier(0.36, -0.64, 0.34, 1.76);
    }

    to {
      opacity: 1;
      transform: none;
      transition: all 0.5s cubic-bezier(0.36, -0.64, 0.34, 1.76);
    }
  }
`;

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var stringToColour = function (str: string) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var colour = "#";
    for (var j = 0; j < 3; j++) {
        var value = (hash >> (j * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substr(-2);
    }
    return colour;
};

interface Props {
    scoreData: Rank;
    no: number;
}

const UserCard = (props: Props) => {
    let snoColor = "";
    switch (props.no) {
        case 0:
            snoColor = "#fad953";
            break;
        case 1:
            snoColor = "#bdc4d2";
            break;
        case 2:
            snoColor = "#eab99b";
            break;
        default:
            snoColor = "white";
    }
    const [scoreData, setScoreData] = useState(props.scoreData.score);

    useEffect(() => {
        setScoreData(props.scoreData.score);
    }, [props.scoreData.score]);

    const data = props.scoreData;

    return (
        <UserCardDiv>
            <LeftDiv>
                <SnoDiv style={{ backgroundColor: snoColor }}>{props.no + 1}</SnoDiv>
                <AvatarDiv
                    style={{ backgroundColor: stringToColour(data.displayName) }}
                >
                    {data.displayName[0]}
                </AvatarDiv>
                <NameDiv>{data.displayName}</NameDiv>
            </LeftDiv>

            <ScoreButton>{numberWithCommas(scoreData)} pt</ScoreButton>
        </UserCardDiv>
    );
};

export default UserCard;
