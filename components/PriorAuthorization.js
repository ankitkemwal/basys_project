import RequestCard from "./RequestCard"

const requests = [
    {
        status: "pending",
        requestId: 112233,
        date: "12/01/23",
        urgency: "medium",
        services: ["CPT 9227 x 2 visit", "CPT 9227 x 2 visit"],
        requestedBy: {
            name: "Dr. Roger Lenon",
            position: "MD"
        }
    },
    {
      status: "accepted",
      requestId: 200003,
      date: "01/15/23",
      urgency: "medium",
      services: ["CPT 92227 x 2 visit"],
      requestedBy: {
          name: "Dr. Roger Lenon",
          position: "MD"
      }
    },
    {
        status: "pending",
        requestId: 827639,
        date: "12/01/23",
        urgency: "medium",
        services: ["CPT 9227 x 2 visit", "CPT 9227 x 2 visit"],
        requestedBy: {
            name: "Dr. Roger Lenon",
            position: "MD"
        }
    },
    {
      status: "accepted",
      requestId: 200853,
      date: "02/02/23",
      urgency: "medium",
      services: ["CPT 92227 x 2 visit","CPT 99091 x 2 visit"],
      requestedBy: {
          name: "Dr. Roger Lenon",
          position: "MD"
      }
    },
    {
        status: "accepted",
        requestId: 244990,
        date: "11/02/23",
        urgency: "high",
        services: ["CPT 9227 x 2 visit", "CPT 922227 x 2 visit", "CPT 92112 x 2 visit"],
        requestedBy: {
            name: "Dr. Roger Lenon",
            position: "MD"
        }
    }
];

const PriorAuthorization = () => {
    const pendingRequests = requests.filter((request) => request.status == "pending");
    const acceptedRequests = requests.filter((request) => request.status == "accepted");

  return (
    <div>
        <div className="text-2xl font-bold my-4">Manage Request</div>
        <div className="mb-4 flex flex-col space-y-4">
            <div className="texl-xl font-bold">Pending</div>
              {pendingRequests.map((request, index) => (
                <div key={index}>
                    <RequestCard request={request} />
                </div>
              ))}
        </div>
          <div className="mb-4 flex flex-col space-y-4">
            <div className="texl-xl font-bold">Accepted</div>
              {acceptedRequests.map((request, index) => (
                <div key={index}>
                      <RequestCard request={request} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default PriorAuthorization