import { SearchCircleIcon } from "@heroicons/react/outline";
import ClaimCard from "./ClaimCard";
import { useState } from "react";

const claims = [
    {
        claimID: 200003,
        date: "01/10/2023",
        status: "Pending",
        patient: {
            name: "Linda Harris",
            dob: "11/09/1945",
            yrs: "76 yrs",
            gender: "F",
            type: "Non-Smoker",
            empid: "P078645",
            phone: "512-265-4081",
            pcp: "Dr. Karen Carter"
        },
        doctor: {
            name: "Dr. Roger Lenon",
            desg: "MD",
            desg_no: "NPI 43212",
            group: "Holtzman Medical Group",
            contact: "2380181221"
        },
        prior: {
            rid: "200003",
            authid: "63c8cef16328crgre5151311f",
            services: ["CPT 92227 x 2 visits Annually"]
        },
        primary: {
            desc: "VETERANS ADMINISTRATION - PRESCOTT VA [199331] 123456789 (Contracts)",
            edi: "199311",
            assignment: "Not Assigned",
            force: "No"
        },
        secondary: {
            desc: "Humana (Medicare Replacement/Advantage - PPo) [47006] 123456789",
            edi: "47006",
            assignment: "Not Assigned",
            force: "No"
        },
        cpt: {
            num: "92227",
            dig: "Imaging of Retina for detection or monitoring of disease",
            units: "2",
            price: "432",
            total: "864"
        },  
    },
    {
        claimID: 101002,
        date: "01/10/2023",
        status: "Pending",
        patient: {
            name: "Linda Harris",
            dob: "11/09/1945",
            yrs: "76 yrs",
            gender: "F",
            type: "Non-Smoker",
            empid: "P078645",
            phone: "512-265-4081",
            pcp: "Dr. Karen Carter"
        },
        doctor: {
            name: "Dr. Roger Lenon",
            desg: "MD",
            desg_no: "NPI 43212",
            group: "Holtzman Medical Group",
            contact: "2380181221"
        },
        prior: {
            rid: "200003",
            authid: "63c8cef16328crgre5151311f",
            services: ["CPT 92227 x 2 visits Annually"]
        },
        primary: {
            desc: "VETERANS ADMINISTRATION - PRESCOTT VA [199331] 123456789 (Contracts)",
            edi: "199311",
            assignment: "Not Assigned",
            force: "No"
        },
        secondary: {
            desc: "Humana (Medicare Replacement/Advantage - PPo) [47006] 123456789",
            edi: "47006",
            assignment: "Not Assigned",
            force: "No"
        },
        cpt: {
            num: "92227",
            dig: "Imaging of Retina for detection or monitoring of disease",
            units: "2",
            price: "432",
            total: "864"
        },
    },
    {
        claimID: 200005,
        date: "01/10/2023",
        status: "Pending",
        patient: {
            name: "Linda Harris",
            dob: "11/09/1945",
            yrs: "76 yrs",
            gender: "F",
            type: "Non-Smoker",
            empid: "P078645",
            phone: "512-265-4081",
            pcp: "Dr. Karen Carter"
        },
        doctor: {
            name: "Dr. Roger Lenon",
            desg: "MD",
            desg_no: "NPI 43212",
            group: "Holtzman Medical Group",
            contact: "2380181221"
        },
        prior: {
            rid: "200003",
            authid: "63c8cef16328crgre5151311f",
            services: ["CPT 92227 x 2 visits Annually"]
        },
        primary: {
            desc: "VETERANS ADMINISTRATION - PRESCOTT VA [199331] 123456789 (Contracts)",
            edi: "199311",
            assignment: "Not Assigned",
            force: "No"
        },
        secondary: {
            desc: "Humana (Medicare Replacement/Advantage - PPo) [47006] 123456789",
            edi: "47006",
            assignment: "Not Assigned",
            force: "No"
        },
        cpt: {
            num: "92227",
            dig: "Imaging of Retina for detection or monitoring of disease",
            units: "2",
            price: "432",
            total: "864"
        },
    },
    {
        claimID: 100300,
        date: "01/10/2023",
        status: "Pending",
        patient: {
            name: "Linda Harris",
            dob: "11/09/1945",
            yrs: "76 yrs",
            gender: "F",
            type: "Non-Smoker",
            empid: "P078645",
            phone: "512-265-4081",
            pcp: "Dr. Karen Carter"
        },
        doctor: {
            name: "Dr. Roger Lenon",
            desg: "MD",
            desg_no: "NPI 43212",
            group: "Holtzman Medical Group",
            contact: "2380181221"
        },
        prior: {
            rid: "200003",
            authid: "63c8cef16328crgre5151311f",
            services: ["CPT 92227 x 2 visits Annually"]
        },
        primary: {
            desc: "VETERANS ADMINISTRATION - PRESCOTT VA [199331] 123456789 (Contracts)",
            edi: "199311",
            assignment: "Not Assigned",
            force: "No"
        },
        secondary: {
            desc: "Humana (Medicare Replacement/Advantage - PPo) [47006] 123456789",
            edi: "47006",
            assignment: "Not Assigned",
            force: "No"
        },
        cpt: {
            num: "92227",
            dig: "Imaging of Retina for detection or monitoring of disease",
            units: "2",
            price: "432",
            total: "864"
        },
    }
];

const Claims = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filterClaims = () => {
        const hasId = (claim) => {
            return claim.claimID.toString().includes(searchTerm.trim());
        }
        const hasDate = (claim) => {
            return claim.date.includes(searchTerm.trim());
        }
        return claims.filter((claim) => hasId(claim) || hasDate(claim)); 
    }

    const filteredClaims = filterClaims();

  return (
      <div>
        <div class="flex justify-between">
            <div className="text-2xl font-semibold">Claims</div>
            <div className="mt-1 relative rounded-md shadow-sm w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    className="focus:ring-navy-blue focus:border-indigo-500 block w-full py-3 pl-10 sm:text-sm border-navy-blue rounded-md"
                    placeholder="Search Claim by Id or Date"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
        <div className="flex gap-4 flex-wrap mt-4">
              {filteredClaims.map((claim, idx) => (
                <div key={idx}>
                    <ClaimCard claim={claim} />
                </div>
            ))}
        </div>
        </div>
  )
}
export default Claims;