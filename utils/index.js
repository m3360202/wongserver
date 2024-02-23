import settings from "../settings.js";
import jwt from 'jsonwebtoken';
import axios from "axios";
import { Readable } from 'stream';
import { Transform } from 'stream';

async function handleRequestGetList(req, res) {
  try {
    const { cookies,Edusign,Edutoken } = req.body;

    const url = 'https://dlhsdx.sccchina.net/student/student/coursestudy/getlist';
    const headers = {
      "Content-Type": "application/json",
      "Origin":"https://dlhsdx.sccchina.net",
      "Referer":"https://dlhsdx.sccchina.net/",
      "Edusign":Edusign,
      "Host":'dlhsdx.sccchina.net',
      "Edutoken":Edutoken,
      "Metadatacode":"StudentVersion_Video",
      "sec-ch-ua":`"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"`,
      "sec-ch-ua-mobile":"?0",
      "sec-ch-ua-platform":"Windows",
      "Cookie":cookies
  }
  const response = await axios.post(url, { data: "aggregation" }, {
    headers: headers,
  });

    res.status(200).json(response.data);

  } catch (error) {
    res.status(506).json(`Error: ${error}`);
  }
}

async function handleRequestTask(req, res) {
  try {
    const { cookies,Edusign,Edutoken,courseVersionID,userAccountId,sign,teachplanCourseVersionId,studyDuration } = req.body;
    const url = 'https://dlhsdx.sccchina.net/student/student/coursestudyrecord/adddurationpc';
    const headers = {
      "Content-Type": "application/json",
      "Origin":"https://dlhsdx.sccchina.net",
      "Referer":"https://dlhsdx.sccchina.net/",
      "Edusign":Edusign,
      "Host":'dlhsdx.sccchina.net',
      "Edutoken":Edutoken,
      "Edurefurl":`https://dlhsdx.sccchina.net/student/videolearning.html#Subpage/StudentVersionVideo?courseVersionId=${courseVersionID}&teachplanCourseVersionId=${teachplanCourseVersionId}&sign=${sign}&userAccountId=${userAccountId}`,
      "Metadatacode":"StudentVersion_Video",
      "sec-ch-ua":`"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"`,
      "sec-ch-ua-mobile":"?0",
      "sec-ch-ua-platform":"Windows",
      "Cookie":cookies
  }
  const response = await axios.post(url, {data:{courseVersionId:courseVersionID,studyDuration,token:"ac58245c4bf34561a25b652ec876a5d5|419adcaf2e97dda6cb9645229cdd6726"}}, {
    headers: headers,
  });

    res.status(200).json(response.data);

  } catch (error) {
    res.status(506).json(`Error: ${error}`);
  }
}

async function handleRequestTest(req, res) {
  try {
    const response = "ok this is a test";

    //将结果返回给客户端
    res.status(200).json(response);
  } catch (error) {
    const responseError = "this basic test is not working";
    res.status(500).json(responseError);
  }
}
export {

  handleRequestGetList,
  handleRequestTest,
  handleRequestTask

};
