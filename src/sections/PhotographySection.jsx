import { ExternalLink } from "lucide-react";

const photos = [
	{
		src: "https://images.pexels.com/photos/32422633/pexels-photo-32422633.jpeg",
		alt: "Photography 1",
	},
	{
		src: "https://images.pexels.com/photos/32269531/pexels-photo-32269531.jpeg",
		alt: "Photography 2",
	},
	{
		src: "https://images.pexels.com/photos/31764282/pexels-photo-31764282.jpeg",
		alt: "Photography 3",
	},
	{
		src: "https://images.pexels.com/photos/14949826/pexels-photo-14949826.jpeg",
		alt: "Photography 4",
	},
	{
		src: "https://images.pexels.com/photos/14949825/pexels-photo-14949825.jpeg",
		alt: "Photography 5",
	},
	{
		src: "https://images.pexels.com/photos/24709088/pexels-photo-24709088.jpeg",
		alt: "Photography 6",
	},
];

const PhotographySection = () => {
	return (
		<div className="section w-full">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="flex items-center justify-between mb-12">
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-color">
						Photography
					</h2>

					<a
						href="https://www.pexels.com/@abhishek-chouhan-255079711"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold shadow-lg hover:shadow-2xl hover:shadow-primary-color/50 hover:-translate-y-1 transition-all duration-300"
					>
						View Full Portfolio{" "}
						<ExternalLink className="w-5 h-5" />
					</a>
				</div>

				{/* Photo Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{photos.map((photo, index) => (
						<div
							key={index}
							className="overflow-hidden rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300"
						>
							<img
								src={photo.src}
								alt={photo.alt}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PhotographySection;
