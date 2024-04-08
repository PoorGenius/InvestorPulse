import React from 'react'

const MemberButton = ({ text = "Already a member?" }) => {
    return (
        <button
            className="font-poppins text-white w-[200px] h-[35px] sm:w-[255px] sm:h-[50px] bg-[#d9d9d9] bg-opacity-25 rounded-[25px] border-[1px] text-[14px] sm:text-[20px] font-normal"
        > {text}
        </button>
    )
}

export default MemberButton
