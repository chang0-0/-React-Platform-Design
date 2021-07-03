import React from "react";
import cn from "classnames";
import "../styles/Body.scss";
import "../styles/mobile.scss";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCommentDetail, BiBookmark } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import colorpaper from "../images/colorpaper.jpg";

export const Body = () => {
  return (
    <div className={cn("Body")}>
      <div className={cn("header")}>
        <div className={cn("logo_section")}>ColorPaper</div>
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
        <div className={cn("mobile_menu")}>
          <GiHamburgerMenu />
        </div>
      </div>

      <div className={cn("contents_wrap")}>
        <div className={cn("filter_section")}>
          <div className={cn("filter_deco")}>
            <GiHamburgerMenu />
          </div>
          <div className={cn("filter_item")}>
            지역
            <HiOutlineChevronDoubleDown className={cn("down-icon")} />
            <ul className={cn("select_box region_select_box")}>
              <li>서울특별시</li>
              <li>부산광역시</li>
              <li>인천광역시</li>
              <li>대구광역시</li>
              <li>광주광역시</li>
              <li>대전광역시</li>
              <li>울산광역시</li>
              <li>세종시</li>
              <li>경기도</li>
              <li>강원도</li>
              <li>충청남도</li>
              <li>충청북도</li>
              <li>경상북도</li>
              <li>경상남도</li>
              <li>전라북도</li>
              <li>전라남도</li>
              <li>제주도</li>
            </ul>
          </div>
          <div className={cn("filter_item")}>
            직무
            <HiOutlineChevronDoubleDown className={cn("down-icon")} />
            <ul className={cn("select_box")}>
              <li>Planner</li>
              <li>Designer</li>
              <li>Developer</li>
              <li>ETC</li>
            </ul>
          </div>
          <div className={cn("filter_item")}>
            경력
            <HiOutlineChevronDoubleDown className={cn("down-icon")} />
            <ul className={cn("select_box")}>
              <li>신입</li>
              <li>1~2년차</li>
              <li>3~4년차</li>
              <li>5년차 이상</li>
              <li>10년차 이상</li>
              <li>경력무관</li>
            </ul>
          </div>
        </div>

        <div className={cn("recruit_items_section")}>
          <div className={cn("recruit_item")}>
            <div className={cn("rc_img")}>
              <span className={cn("more_bt")}>MORE VIEW</span>
            </div>
            <div className={cn("rc_contents")}>
              <div className={cn("rc_title")}>
                프론트엔드/백엔드 개발 공부하시는 분 함께해요!
              </div>
              <div className={cn("rc_subinfo")}>
                <span className={cn("rc_writer")}>by 이지잇</span>
                <span className={cn("rc_view")}>
                  <IoMdPeople className={cn("icon")} />
                  21
                </span>
                <span className={cn("rc_comment")}>
                  <BiCommentDetail className={cn("icon")} />3
                </span>
              </div>
              <div className={cn("rc_job")}>웹 개발자</div>
              <div className={cn("rc_desc")}>
                푸드테크/ 아이디어 구상 단계/ 현재 구성원 2명/ 장소미정/
                ~모집시까지
              </div>
              <div className={cn("rc_bottom")}>
                <div className={cn("rc_time")}>7시간전</div>
                <div className={cn("rc_favorite")}>
                  <BiBookmark className={cn("icon")} />
                </div>
              </div>
            </div>
          </div>

          <div className={cn("recruit_item")}>
            <div className={cn("rc_img")}>
              <span className={cn("more_bt")}>MORE VIEW</span>
            </div>
            <div className={cn("rc_contents")}>
              <div className={cn("rc_title")}>
                프론트엔드/백엔드 개발 공부하시는 분 함께해요!
              </div>
              <div className={cn("rc_subinfo")}>
                <span className={cn("rc_writer")}>by 이지잇</span>
                <span className={cn("rc_view")}>
                  <IoMdPeople className={cn("icon")} />
                  21
                </span>
                <span className={cn("rc_comment")}>
                  <BiCommentDetail className={cn("icon")} />3
                </span>
              </div>
              <div className={cn("rc_job")}>웹 개발자</div>
              <div className={cn("rc_desc")}>
                푸드테크/ 아이디어 구상 단계/ 현재 구성원 2명/ 장소미정/
                ~모집시까지
              </div>
              <div className={cn("rc_bottom")}>
                <div className={cn("rc_time")}>7시간전</div>
                <div className={cn("rc_favorite")}>
                  <BiBookmark className={cn("icon")} />
                </div>
              </div>
            </div>
          </div>
          <div className={cn("recruit_item")}>
            <div className={cn("rc_img")}>
              <span className={cn("more_bt")}>MORE VIEW</span>
            </div>
            <div className={cn("rc_contents")}>
              <div className={cn("rc_title")}>
                프론트엔드/백엔드 개발 공부하시는 분 함께해요!
              </div>
              <div className={cn("rc_subinfo")}>
                <span className={cn("rc_writer")}>by 이지잇</span>
                <span className={cn("rc_view")}>
                  <IoMdPeople className={cn("icon")} />
                  21
                </span>
                <span className={cn("rc_comment")}>
                  <BiCommentDetail className={cn("icon")} />3
                </span>
              </div>
              <div className={cn("rc_job")}>웹 개발자</div>
              <div className={cn("rc_desc")}>
                푸드테크/ 아이디어 구상 단계/ 현재 구성원 2명/ 장소미정/
                ~모집시까지
              </div>
              <div className={cn("rc_bottom")}>
                <div className={cn("rc_time")}>7시간전</div>
                <div className={cn("rc_favorite")}>
                  <BiBookmark className={cn("icon")} />
                </div>
              </div>
            </div>
          </div>
          <div className={cn("recruit_item")}>
            <div className={cn("rc_img")}>
              <span className={cn("more_bt")}>MORE VIEW</span>
            </div>
            <div className={cn("rc_contents")}>
              <div className={cn("rc_title")}>
                프론트엔드/백엔드 개발 공부하시는 분 함께해요!
              </div>
              <div className={cn("rc_subinfo")}>
                <span className={cn("rc_writer")}>by 이지잇</span>
                <span className={cn("rc_view")}>
                  <IoMdPeople className={cn("icon")} />
                  21
                </span>
                <span className={cn("rc_comment")}>
                  <BiCommentDetail className={cn("icon")} />3
                </span>
              </div>
              <div className={cn("rc_job")}>웹 개발자</div>
              <div className={cn("rc_desc")}>
                푸드테크/ 아이디어 구상 단계/ 현재 구성원 2명/ 장소미정/
                ~모집시까지
              </div>
              <div className={cn("rc_bottom")}>
                <div className={cn("rc_time")}>7시간전</div>
                <div className={cn("rc_favorite")}>
                  <BiBookmark className={cn("icon")} />
                </div>
              </div>
            </div>
          </div>
          <div className={cn("recruit_item")}>
            <div className={cn("rc_img")}>
              <span className={cn("more_bt")}>MORE VIEW</span>
            </div>
            <div className={cn("rc_contents")}>
              <div className={cn("rc_title")}>
                프론트엔드/백엔드 개발 공부하시는 분 함께해요!
              </div>
              <div className={cn("rc_subinfo")}>
                <span className={cn("rc_writer")}>by 이지잇</span>
                <span className={cn("rc_view")}>
                  <IoMdPeople className={cn("icon")} />
                  21
                </span>
                <span className={cn("rc_comment")}>
                  <BiCommentDetail className={cn("icon")} />3
                </span>
              </div>
              <div className={cn("rc_job")}>웹 개발자</div>
              <div className={cn("rc_desc")}>
                푸드테크/ 아이디어 구상 단계/ 현재 구성원 2명/ 장소미정/
                ~모집시까지
              </div>
              <div className={cn("rc_bottom")}>
                <div className={cn("rc_time")}>7시간전</div>
                <div className={cn("rc_favorite")}>
                  <BiBookmark className={cn("icon")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
