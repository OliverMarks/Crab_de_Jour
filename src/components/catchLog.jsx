


export default function CatchLog ({players}) {





return (

        <>
    <h2>  Crab Log </h2>

    <div className="catch-log-messages">
  {players.catchLog.slice().reverse().map((entry, idx) => (
    <p key={idx}>{entry}</p>
  ))}
</div>

    </>

)


}