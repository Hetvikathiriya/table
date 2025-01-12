import React from "react";

export default function Faculty() {
  return (
    <div className="max-w-72   text-white bg-blue-900 rounded-3xl shadow">
      <a href="#">
        <img
          className="rounded-3xl p-3"
          src={"../src/assets/img/img1.jpg"}
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h4 className="mb-0 text-left text-2xl font-bold  text-white">
            -Paavan Pandit
          </h4>
          <h6 className="mb-5 px-3 text-left text-sm   text-white">Director</h6>
        </a>
        <h4 className="mb-0 px-2 text-left text-xl">
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
