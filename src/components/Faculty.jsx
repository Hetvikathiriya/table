import React from "react";

export default function Faculty() {
  return (
    <div className="max-w-sm text-white bg-blue-900 rounded-3xl shadow">
      <a href="#">
        <img
          className="rounded-3xl p-3"
          src={"../src/assets/img/img1.jpg"}
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h4 className=" text-left text-3xl font-bold  text-white">
            -Paavan Pandit
          </h4>
          <h6 className="mb-6 px-3 text-left text-xl  ">Director</h6>
        </a>
        <h4 className="mb-7 px-2 text-left text-2xl">
          Animation <br />
          Ms.c + Bs.c <br />
          Email:-
          <br />
          XYZ@gmail.coms
        </h4>
      </div>
    </div>
  );
}
