import Link from "next/link";

function RestaurantCard() {
  return (
    <div className="border-b flex pb-5">
      <img
        src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5 text-[#374151] font-wdc">
        <h2 className="text-3xl font-[500]">Aiāna Restaurant Collective</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg text-[#374151]">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/milestones-stones">
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
