import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="header-title">สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559</h1>
      <h3 className="header-sub-title">ลักษณะพื้นที่</h3>
      <p className="header-details">
        กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดในประเทศไทย หากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่
        เดินทางมาทำงานในตอนกลางวันด้วยแล้ว คาดว่าจะสูงถึงเกือบเท่าตัวของประชากรที่ปรากฏในทะเบียน เราจึง เรียกกรุงเทพฯ
        ว่าเป็น{" "}
        <a href="https://en.wikipedia.org/wiki/Megacity" target="_blank">
          “อภิมหานคร (megacity)”
        </a>{" "}
        คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
      </p>

      <br />
      <p className="header-details">
        อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี 2559 ดังแสดงในแผนภูมิต่อไปนี้{" "}
      </p>
    </div>
  );
};

export default Header;
