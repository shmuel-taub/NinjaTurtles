

function Msg(propInfo: {msg: string}) {

  return (
    <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <p style={{color: "red"}} >{propInfo.msg}</p>
      </div>
    </>
  )
}

export default Msg
