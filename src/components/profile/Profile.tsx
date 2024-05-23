'use client';
import React from 'react';
import ProfileWrapper from './ui/ProfileWrapper';
import { FaXTwitter, FaReddit, FaDiscord, FaSteam, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";


const ProfileComponent = ({ profile }: any) => {
	return (
		<ProfileWrapper>
		<div className="flex items-center justify-center gap-4">
			<div className="flex flex-row  items-start gap-4">
				<div className="flex flex-col border-amber-200/90 shadow-amber-200/50 shadow-2xl transition border-[1px] rounded-2xl p-4 gap-4 sticky top-4">
					<div className="flex gap-4">
						<div className="flex flex-col gap-4 w-[316px]">
							<div className="avatar flex justify-center">
								<div className="w-36 rounded-full">
									<img
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
								</div>
							</div>
							<div className="flex justify-center">
								<h1 className="text-2xl font-bold">{profile.username}</h1>
							</div>
							<div className="flex flex-row justify-center w-full gap-2">
								<h1 className="font-bold">Joined:</h1>
								<p>5/23/24</p>
							</div>
							<div className="stats stats-vertical lg:stats-horizontal shadow">

								<div className="stat">
									<div className="stat-title">Connections</div>
									<div className="stat-value">152</div>
									<div className="stat-desc">Public</div>
								</div>

								<div className="stat">
									<div className="stat-title">Feedback</div>
									<div className="stat-value">50%</div>
									<div className="stat-desc">Positive</div>
								</div>

							</div>
							<div className="flex flex-col rounded-2xl bg-stone-900 p-4 gap-4">
								<div>
									<h1 className="font-bold">Connected accounts:</h1>
								</div>
								<div className="flex flex-wrap rounded-2xl bg-stone-900 gap-4">
									<button>
										<div className="bg-[#7289da] rounded-full p-2 text-white"><FaDiscord/></div>
									</button>
									<button>
										<div className="bg-stone-950 rounded-full p-2 text-white"><FaSteam/></div>
									</button>
									<button>
										<div className="bg-[#FF4500] rounded-full p-2 text-white"><FaReddit/></div>
									</button>
									<button>
										<div className="bg-stone-950 rounded-full p-2 text-white"><FaXTwitter/></div>
									</button>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<div className="rounded-2xl min-h-48 bg-stone-900 p-4">
									<h1 className="font-bold">{profile.username}'s bio:</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid
										aspernatur consequatur deserunt dignissimos dolorum eius eum, fugiat in sequi
										unde, ut voluptate? Accusamus eveniet ex hic ipsum nemo!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col min-h-full w-[1000px] bg-stone-900 rounded-2xl p-4 gap-4">
					<div className="overflow-x-auto">
						<table className="table">
							{/* head */}
							<thead>
							<tr>
								<th>Hash</th>
								<th>Connection</th>
								<th>Feedback</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>
									<div
										className="text-base">127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935
									</div>
								</td>
								<td scope="row"
									className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
									<img className="w-10 h-10 rounded-full"
										 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
										 alt="Jese image"/>
									<div className="ps-4">
										<div className="text-base font-semibold"><a href="">Jane Doe</a></div>
									</div>
								</td>
								<td className="text-xl">
									<FaRegThumbsUp/>
								</td>
							</tr>
							<tr>
								<td>
									<div
										className="text-base">127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935
									</div>
								</td>
								<td scope="row"
									className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
									<img className="w-10 h-10 rounded-full"
										 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Jese image"/>
									<div className="ps-4">
										<div className="text-base font-semibold"><a href="">John Doe</a></div>
									</div>
								</td>
								<td className="text-xl">
									<FaRegThumbsDown />
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		</ProfileWrapper>
	);
};

export default ProfileComponent;
