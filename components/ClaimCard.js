import { useState } from "react";
import ClaimModal from "./ClaimModal";

const ClaimCard = ({claim}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white shadow-sm rounded-md p-4 w-72">
            <div className="flex space-x-3">
                <div className="font-semibold">Claim ID:</div>
                <div>{claim.claimID}</div>
            </div>
            <div className="flex space-x-3">
                <div className="font-semibold">Claim By:</div>
                <div>{claim.patient.name}</div>
            </div>
            <div className="flex space-x-3">
                <div className="font-semibold">Date:</div>
                <div>{claim.date}</div>
            </div>
            <div className="flex space-x-3">
                <div className="font-semibold">Requested By:</div>
                <div>{claim.doctor.name}</div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="px-6 py-2 bg-navy-blue text-white mt-4 rounded-md"
                >
                    View Details
                </button>
            </div>
            <ClaimModal isOpen={isOpen} setIsOpen={setIsOpen} claim={claim} />
        </div>
    )
}

export default ClaimCard;