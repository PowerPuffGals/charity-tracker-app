import React from "react";
import DownloadXlsx from "./DownloadXlsx";
import { useQuery } from "@apollo/client";
import { USER_SUMMARY } from "../utils/queries";

const Summary = () => {
  // Extract data from USER_SUMMARY
  const { data } = useQuery(USER_SUMMARY);
  const donations = data?.me.donations || [];
  const categories = data?.me.categories || [];

  // Total categories calculation
  const categoryLength = categories.length;

  // Total donation spent
  const donationTotal = donations.reduce(
    (total, obj) => obj.donationAmount + total,
    0
  );

  return (
    // Dashboard container
    <div className="bg-indigo-100 rounded-lg px-4">
      <h1 className="my-2 py-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Summary
      </h1>
      {/* Summary */}
      <div className="flex flex-wrap flex-row space-x-2">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Your Contribution
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              You've donated a total of{" "}
              <span className="mb-1 bg-indigo-100 text-indigo-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                ${donationTotal}
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Your Portfolio
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              You've donated across {categoryLength} categories.
            </p>
          </div>
        </div>
      </div>

      {/* Downloads */}
      <div className="flex flex-wrap p-4 space-x-2">
        <div className="max-w-sm">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Tax Forms</span>
          </button>
        </div>
        <div className="max-w-sm">
          <span>
            <DownloadXlsx />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
