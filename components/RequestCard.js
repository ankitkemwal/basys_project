import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { ClockIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const RequestCard = ({request}) => {
  return (
    <div className="group bg-white hover:bg-navy-blue px-8 py-4 rounded-md shadow-md flex justify-between hover:text-white items-center">
        <div className="text-center">
            <div className='capitalize'>{request.status}</div>
            {request.status == "pending" ? 
                <div className="relative">
                    <ClipboardIcon className="h-10 w-10 mx-auto" />
                    <ClockIcon className="h-5 w-5 absolute right-3 bottom-0" />
                </div> 
                : 
                <ClipboardCheckIcon className="h-10 w-10 mx-auto" />
            }
        </div>
        <div>
            <div className='flex space-x-1'>
                <div className='font-semibold'>Request Id:</div>
                <div>{request.requestId}</div>
            </div>
            <div className='flex space-x-1'>
                <div className='font-semibold'>Date: </div>
            <div>{request.date}</div>
            </div>
            <div>Medium Urgency</div>
        </div>
        <div>
            <div className='font-semibold'>Services</div>
            <ul>
                {request.services.map((service, index) => 
                    <li key={index} className='text-xs'>- {service}</li>
                )}
            </ul>
        </div>
        <div>
            <div className='font-semibold'>Requested By</div>
              <div>{request.requestedBy.name}, {request.requestedBy.position}</div>
        </div>
        <div className='text-center'>
            {request.status == "pending" &&
                <button className='bg-navy-blue group-hover:bg-white px-4 py-2 text-white group-hover:text-navy-blue rounded-md'>
                    Approve
                </button>
            }
            <div className='mt-1'>
                <Link href="some" className='underline text-sm'>View Details</Link>
            </div>
        </div>
    </div>
  )
}

export default RequestCard