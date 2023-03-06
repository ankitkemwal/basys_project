import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ClipboardIcon } from "@heroicons/react/outline"
import { ClockIcon, UserCircleIcon } from "@heroicons/react/solid"

export default function ClaimModal({isOpen, setIsOpen, claim}) {

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-gray-200 bg-opacity-20 p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='grid grid-cols-3 gap-3'>
                                        <div className='col-span-1 flex flex-col space-y-3'>
                                            <div className='bg-white p-4 rounded-md shadow-sm flex'>
                                                <div className="relative w-16 h-10 my-auto">
                                                    <ClipboardIcon className="h-10 w-10 mx-auto" />
                                                    <ClockIcon className="h-5 w-5 absolute right-3 bottom-0" />
                                                </div> 
                                                <div className='flex-1'>
                                                    <div className='flex space-x-2'>
                                                        <div className="font-semibold">Claim ID:</div>
                                                        <div>{claim.claimID}</div>
                                                    </div>
                                                    <div className='flex space-x-2'>
                                                        <div className="font-semibold">Date of Service:</div>
                                                        <div>{claim.date}</div>
                                                    </div>
                                                    <div className='flex space-x-2'>
                                                        <div className="font-semibold">Status:</div>
                                                        <div className='capitalize'>{claim.status}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bg-white p-4 rounded-md shadow-sm'>
                                                <div className='flex space-x-2'>
                                                    <UserCircleIcon className="w-16 h-16 text-gray-300"/> 
                                                    <div className='flex-1'>
                                                        <div className='font-bold'>{claim.patient.name}</div>
                                                        <div className='text-sm'>
                                                            <span>{claim.patient.dob}</span>, 
                                                            <span className='ml-1'>({claim.patient.yrs})</span>
                                                            <span className='ml-1'>{claim.patient.gender}</span>
                                                        </div>
                                                        <div className='text-xs font-bold'>{claim.patient.type}</div>
                                                    </div>
                                                </div>
                                                <table className='text-sm mt-4'>
                                                    <thead>
                                                        <th className='pr-3'>EMPI/MRN</th>
                                                        <th className='pr-3'>Phone</th>
                                                        <th>PCP</th>
                                                    </thead>
                                                    <tbody className='text-xs'>
                                                        <tr className='mt-2'>
                                                            <td className='whitespace-nowrap pr-3'>{claim.patient.empid}</td>
                                                            <td className='whitespace-nowrap pr-3'>{claim.patient.phone}</td>
                                                            <td className='whitespace-nowrap'>{claim.patient.pcp}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='bg-white p-4 rounded-md shadow-sm flex'>
                                                <div className='flex-1'>
                                                    <div className='font-bold text-xl'>{claim.doctor.name}</div>
                                                    <div className='text-sm mt-2'>
                                                        {claim.doctor.desg},{" "}
                                                        <span>{claim.doctor.desg_no}</span>
                                                    </div>
                                                    <div className='text-sm'>{claim.doctor.group}</div>
                                                    <div className='text-sm'>Contact No. {claim.doctor.contact}</div>
                                                </div>
                                                <img
                                                    width="70px"
                                                    src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
                                                />
                                            </div>
                                            <div className='bg-white p-4 rounded-md shadow-sm'>
                                                <div className='font-semibold'>Prior Authorization</div>
                                                <div className='flex space-x-2 text-sm mt-2'>
                                                    <div className='font-semibold'>RID:</div>
                                                    <div>{claim.prior.rid}</div>
                                                </div>
                                                <div className='flex space-x-2 text-sm'>
                                                    <div className='font-semibold'>AuthID:</div>
                                                    <div>{claim.prior.authid}</div>
                                                </div>
                                                <div className='text-sm'>
                                                    <div className='font-semibold'>Services Requested:</div>
                                                    {claim.prior.services.map((service, idx) => 
                                                        <div key={idx} className='text-sm'>- {service}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-span-2 flex flex-col space-y-3'>
                                            <div className='bg-white p-4 rounded-md shadow-sm'>
                                                <div className='font-semibold'>Primary Payer</div>
                                                <div className='flex space-x-2 text-sm mt-2'>
                                                    <div className=''>{claim.primary.desc}</div>
                                                </div>
                                                <div className='flex space-x-2 text-sm'>
                                                    <div className='font-mdeium'>EDI:</div>
                                                    <div>{claim.primary.edi}</div>
                                                </div>
                                                <div className='text-sm flex space-x-2'>
                                                    <div className='font-mdeium'>Assignment:</div>
                                                    <div>{claim.primary.assignment}</div>
                                                </div>
                                                <div className='text-sm flex space-x-2'>
                                                    <div className='font-mdeium capitalize'>Force Drop To paper:</div>
                                                    <div>{claim.primary.force}</div>
                                                </div>
                                            </div>
                                            <div className='bg-white p-4 rounded-md shadow-sm'>
                                                <div className='font-semibold'>Secondary Payer</div>
                                                <div className='flex space-x-2 text-sm mt-2'>
                                                    <div className=''>{claim.secondary.desc}</div>
                                                </div>
                                                <div className='flex space-x-2 text-sm'>
                                                    <div className='font-mdeium'>EDI:</div>
                                                    <div>{claim.secondary.edi}</div>
                                                </div>
                                                <div className='text-sm flex space-x-2'>
                                                    <div className='font-mdeium'>Assignment:</div>
                                                    <div>{claim.secondary.assignment}</div>
                                                </div>
                                                <div className='text-sm flex space-x-2'>
                                                    <div className='font-mdeium capitalize'>Force Drop To paper:</div>
                                                    <div>{claim.secondary.force}</div>
                                                </div>
                                            </div>
                                            <table className='text-sm mt-4 rounded-md shadow-sm bg-white overflow-hidden'>
                                                <thead className='bg-navy-blue text-white'>
                                                    <th className='p-3'>CPT</th>
                                                    <th className='p-3'>Diagnosis</th>
                                                    <th className='p-3'>Units</th>
                                                    <th className='p-3'>Price</th>
                                                </thead>
                                                <tbody className='text-xs'>
                                                    <tr className='mt-2'>
                                                        <td className='whitespace-nowrap p-3'>{claim.cpt.num}</td>
                                                        <td className='whitespace-nowrap p-3'>{claim.cpt.dig}</td>
                                                        <td className='whitespace-nowrap p-3'>{claim.cpt.units}</td>
                                                        <td className='whitespace-nowrap p-3'>{claim.cpt.price}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='font-bold px-10 py-2 text-sm text-right' colspan="4">
                                                            Total: {claim.cpt.total}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='bg-white p-4 rounded-md shadow-sm'>
                                                <div className='font-bold'>Note for Provider</div>
                                                <textarea 
                                                    placeholder='text goes here...' 
                                                    className='border-0 py-2 text-sm w-full focus:ring-0'
                                                />
                                            </div>
                                            <div className='flex justify-end space-x-4'>
                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    className='rounded-md bg-rose-600 py-2 px-3 text-white'
                                                >
                                                    Reject with note
                                                </button>
                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    className='rounded-md bg-navy-blue py-2 px-3 text-white'
                                                >
                                                    Approve
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
