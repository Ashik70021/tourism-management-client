
const DiscoverDestination = () => {
	return (
		<section className=" dark:bg-gray-100 dark:text-gray-800 mt-32">
			<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
				<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
					<div>
						<h3 className="text-2xl md:text-4xl font-bold tracking-tight dark:text-gray-900 dark:text-white ">Discover your all the destinations with us!</h3>
						<p className="mt-3 text-lg dark:text-gray-600">Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services.</p>
						<div className="mt-12 space-y-12">
							<div className="flex hover:-translate-x-5 duration-700">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#90D26D] text-gray-50">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-2xl font-medium leading-6 dark:text-gray-900">Experienced tour guide</h4>
									<p className="mt-2 dark:text-gray-600">Knowledgeable and experienced tour guide providing insightful and memorable travel experiences for explorers worldwide.</p>
								</div>
							</div>
							<div className="flex hover:-translate-x-5 duration-700">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#90D26D] text-gray-50">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-2xl font-medium leading-6 dark:text-gray-900">Affordable tour packages</h4>
									<p className="mt-2 dark:text-gray-600">Explore destinations affordably with curated tour packages designed to suit your budget and travel preferences.</p>
								</div>
							</div>
							<div className="flex hover:-translate-x-5 duration-700">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#90D26D] text-gray-50">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-2xl font-medium leading-6 dark:text-gray-900">Explore top places over the world</h4>
									<p className="mt-2 dark:text-gray-600">Discover iconic destinations worldwide, from vibrant cities to natural wonders, with our curated travel experiences.</p>
								</div>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="mt-10 lg:mt-0">
						<img src="../../public/images/discover.png" alt="" className="mx-auto" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default DiscoverDestination;