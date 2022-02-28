import React from "react";
import "./List.css";

function ListComponent() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__title">
          <img src="/images/WeBucks.png" alt="" width="70" />
        </div>
        <ul class="navbar__menu">
          <li>
            <div className="menu__list" href="">
              COFFEE
            </div>
          </li>
          <li>
            <div className="menu__list" href="">
              MENU
            </div>
          </li>
          <li>
            <div className="menu__list" href="">
              STORE
            </div>
          </li>
          <li>
            <div className="menu__list" href="">
              WHAT'NEW
            </div>
          </li>
        </ul>
      </div>

      <section>
        <ul class="menuInfo">
          <li>
            <p>콜드 브루 커피 ☕️ </p>
          </li>
          <li>
            <p> 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
          </li>
        </ul>
        <div class="list">
          <ul class="list__items">
            <li class="imgs">
              <img src="images/coffee.jpg" alt="" />
            </li>
            <li className="info"> 나이트로 바닐라 크림</li>
          </ul>
          <ul className="list__items">
            <li className="imgs">
              <img src="images/nightColdBrew.jpg" alt="" />
            </li>
            <li class="info">나이트 콜드 브루</li>
          </ul>
          <ul className="list__items">
            <li className="imgs">
              <img src="images/vanilaCream.jpg" alt="" />
            </li>
            <li className="info">바닐라크림 콜드 브루 </li>
          </ul>
          <ul className="list__items">
            <li className="imgs">
              <img src="images/coldbrew.jpg" alt="" />
            </li>
            <li className="info">콜드 브루</li>
          </ul>
        </div>
        <div className="list">
          <div className="list__items">
            <div className="imgs">
              <img src="images/latte.jpg" alt="" />
            </div>
            <div className="info">돌체 콜드 브루</div>
          </div>
          <div className="list__items">
            <div className="imgs">
              <img src="images/theblack.jpg" alt="" />
            </div>
            <div className="info">시그니처 더 블랙 콜드 브루 </div>
          </div>
          <div className="list__items">
            <div className="imgs">
              <img src="images/coldbrewlatte.jpg" alt="" />
            </div>
            <div className="info">콜드 브루 오트 라떼</div>
          </div>
          <div className="list__items">
            <div className="imgs">
              <img src="images/icecreamcoffe.jpg" alt="" />
            </div>
            <div className="info">콜드 브루 플로트</div>
          </div>
        </div>
        <div className="lastList">
          <div className="lastList__items">
            <div className="imgs">
              <img src="images/molt.jpg" alt="" />
            </div>
            <div className="info">콜드 브루 몰트</div>
          </div>
          <div className="lastList__items">
            <div className="imgs">
              <img src="images/moca.jpg" alt="" />
            </div>
            <div className="info">벨벳 다크 모카 나이트로</div>
          </div>
        </div>
      </section>
      <section>
        <h1>
          <ul className="menuInfo">
            <li>
              <p>브루드 커피 ☕️ </p>
            </li>
            <li>
              <p> 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
            </li>
          </ul>
        </h1>
        <div class="lastList">
          <div class="lastList__items">
            <div class="imgs">
              <img src="images/icecoffee.jpg" alt="" />
            </div>
            <div class="info">아이스 커피</div>
          </div>
          <div class="lastList__items">
            <div class="imgs">
              <img src="images/americano.jpg" alt="" />
            </div>
            <div class="info">오늘의 커피</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListComponent;
