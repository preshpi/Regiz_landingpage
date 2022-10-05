import React from 'react'

function Team() {
  return (
    <div name='team' className="mt-8 p-5">
      <h1 className="text-5xl text-center mt-3 text-white font-bold tracking-wide mb-5">Team</h1>
      <div className="grid lg:grid-cols-3 font-[poppins] text-white m-10 flex justify-center items-center text-center gap-3">
        <div className="p-3">
          <p>image</p>
          <h1 className="text-x">Ogunnaike Wahab B	</h1>
          <p>Founder/CEO</p>
        </div>

        <div className="p-3">
          <p>image</p>
          <h1>Akanji Oluwaleke J</h1>
          <p>Co-Founder/CTO	</p>
        </div>

        <div className="p-3">
          <p>image</p>
          <h1>Obiano Lynda C.</h1>
          <p>Co-Founder/Product Designer </p>
        </div>
      </div>
    </div>
  )
}

export default Team