"use client";

import { Fragment, useState } from "react";

export default function Home() {
  const [ids] = useState([crypto.randomUUID()]);

  return (
    <>
      {ids.map((id) => (
        <Fragment key={id}>
          <input type="text" name={id} id={id} />
          <textarea name={id} id={id} />
        </Fragment>
      ))}
    </>
  );
}
