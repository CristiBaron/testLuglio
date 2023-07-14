import { useState } from "react";

function App() {
  const [firstStudentVote, setfirstStudentVote] = useState(3);
  const [secondStudentVote, setsecondStudentVote] = useState(3);

  let message = "";

  if (firstStudentVote > secondStudentVote) {
    message = "Mario Rossi è in vantaggio";
  } else if (firstStudentVote < secondStudentVote) {
    message = "Luigi Verdi è in vantaggio";
  } else {
    message = "Mario Rossi e Luigi Verdi sono pari";
  }

  return (
    <div className="container mx-auto mt-8 flex items-center justify-center">
      <div className="flex justify-center flex-col items-center">
        <div>
          <div className="flex items-end gap-3 justify-center mb-4">
            <h1 className="text-2xl font-bold  ">Competition </h1>
            <img src="/img/advantage.png" className=" h-14" alt="" />
          </div>
          <div className=" flex  gap-6 items-center">
            <img src="/img/man.png" className="h-14" alt="" />
            <div>
              <div className="input-container">
                <label htmlFor="firstStudentVote">Voto di Mario Rossi:</label>
                <input
                  type="number"
                  id="firstStudentVote"
                  min={1}
                  max={10}
                  value={firstStudentVote}
                  onChange={(e) => {
                    setfirstStudentVote(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" flex  gap-6 items-center">
            <img src="/img/profilo.png" className=" h-14" alt="" />
            <div>
              <div className="input-container">
                <label htmlFor="secondStudentVote">Voto di Luigi Verdi:</label>
                <input
                  type="number"
                  id="secondStudentVote"
                  min={1}
                  max={10}
                  value={secondStudentVote}
                  onChange={(e) => {
                    setsecondStudentVote(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className=" text-lg font-semibold mb-2">{message}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
