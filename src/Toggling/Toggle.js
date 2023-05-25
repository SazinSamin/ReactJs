import React, {useState} from "react";

export default function Toggle() {

  const [toogle, setToggle] = useState(true);

  const onChangeToggle = () => {
    console.log(toogle);
    setToggle(!toogle);
  }

  return (
    <div>
      <h1>Toggle</h1>
      {!toogle && (<p>Salar de Uyuni...</p>)}
      {toogle && (<p>
        Salar de Uyuni, amid the Andes in southwest Bolivia, is the world’s
        largest salt flat. Its the legacy of a prehistoric lake that went dry,
        leaving behind a desertlike, nearly 11,000-sq.-km. landscape of
        bright-white salt, rock formations and cacti-studded islands. Its
        otherworldly expanse can be observed from central Incahuasi Island.
        Though wildlife is rare in this unique ecosystem, it harbors many pink
        flamingos
      </p>)}
      <div>
        <button onClick={onChangeToggle}>{toogle ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}
