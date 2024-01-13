
'use strict';

/**
 * navbar variables
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

function filterJobs() {
  var searchKeyword = document.getElementById("searchJob").value.toLowerCase();
  var locationFilter = document.getElementById("locationFilter").value;
  var positionFilter = document.getElementById("positionFilter").value;
  var experienceFilter = document.getElementById("experienceFilter").value;

  // You should replace this with your dynamic data retrieval and rendering logic
  var jobs = [
    {
      position: "Web Developer",
      location: "Noida",
      experience: "0-2",
      company: {
        name: "Oh Puhleez",
        logo: "./assets/images/oh_puhleeez_logo.jpeg",
        description:
          "A leading technology company specializing in Marketing Agency.",
      },
    },
    {
      position: "Software Developer",
      location: "Banglore,Noida",
      experience: "0-2",
      company: {
        name: "Google",
        logo: "./assets/images/google.jpeg",
        description:
          "A leading technology company specializing in software development.",
      },
    },
    {
      position: "UX/UI Designer",
      location: "Noida,Banglore,Hydrabad",
      experience: "2-5",
      company: {
        name: "Adobe",
        logo: "./assets/images/adobe.png",
        description:
          "An innovative design studio creating user-centric solutions.",
      },
    },
    {
      position: "Software Developer 3",
      location: "Banglore,Noida,chennai",
      experience: "5+ Years",
      company: {
        name: "Amazon",
        logo: "./assets/images/amazon.jpeg",
        description:
          "A leading technology company specializing in software development.",
      },
    },
    {
      position: "Software Developer 2",
      location: "Banglore,Noida",
      experience: "2-5",
      company: {
        name: "Meta",
        logo: "./assets/images/meta.webp",
        description:
          "A leading technology company specializing in software development.",
      },
    },
  ];

  var filteredJobs = jobs.filter(function (job) {
    return (
      (searchKeyword === "" ||
        job.position.toLowerCase().includes(searchKeyword) ||
        job.company.name.toLowerCase().includes(searchKeyword) ||
        job.location.toLowerCase().includes(searchKeyword) ||
        job.company.description.toLowerCase().includes(searchKeyword)) &&
      (locationFilter === "" || job.location === locationFilter) &&
      (positionFilter === "" || job.position === positionFilter) &&
      (experienceFilter === "" || job.experience === experienceFilter)
    );
  });

  renderJobs(filteredJobs);
}

function renderJobs(jobs) {
  var jobListingsDiv = document.querySelector(".job-listings");
  jobListingsDiv.innerHTML = "";

  jobs.forEach(function (job) {
    var jobListing = document.createElement("div");
    jobListing.className = "job-listing company-profile";

    jobListing.innerHTML = `
            <div class="company-logo">
                <img src="${job.company.logo}" alt="${job.company.name} Logo">
            </div>
            <div>
                <h2>${job.position}</h2>
                <p>${job.company.name}</p>
                <p>${job.location}</p>
                <p>${job.company.description}</p>
                <p>Experience: ${job.experience} years</p>
                <a href="#" class="apply-button">Apply Now</a>
            </div>
        `;

    jobListingsDiv.appendChild(jobListing);
  });
}

// Initial rendering of all jobs
filterJobs();
