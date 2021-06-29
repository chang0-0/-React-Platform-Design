import React from "react";
import cn from "classnames";
import "../styles/Body.scss";
import colorpaper from "../images/colorpaper.jpg";

export const Body = () => {
  return (
    <div className={cn("Body")}>
      <div className={cn("header")}>
        <div className={cn("logo_section")}>
          <img src={colorpaper} alt="colorpaper" />
          <div className={cn("page_title")}>메이트 모집</div>
          <div className={cn("main_menu")}>
            <ul>
              <li>메이트찾기</li>
              <li>메이트 모집</li>
              <li>메이트지원사업</li>
              <li>교육 행사</li>
              <li>스타트업툴</li>
              <li>매거진</li>
              <li className={cn("login_menu")}>로그인/회원가입</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cn("contact_wrap")}></div>
    </div>
  );
};
