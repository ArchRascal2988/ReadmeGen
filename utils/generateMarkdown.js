// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return "";
  } else{
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return "";
  } else{
    return `\n * [License](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, badge, link) {
  if(!license){
    return "";
  } else{
    return `
  <a name="lic"></a>
  ## 7.License
  ${badge}
  \n This project is licensed under ${license}
  ${link}`;
  }
}

// TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
  const lName= data.license;
  const badge= renderLicenseBadge(lName);
  const link= renderLicenseLink(lName);
  const section= renderLicenseSection(lName, badge, link);
 

  return `
  # ${data.username}: ${data.reponame}

  ##Table of Contents:
  1. [ Description ](#des)
  2. [ Languages Used ](#lang)
  3. [ Installation Instructions ](#inst)
  4. [ Usage Guidelines ](#use)
  5. [ Contribution Guidelines ](#cont)
  6. [ Test Instructions ](#test)
  7. [ License ](#lic)
  8. [ Link ](#link)

  <a name="des"></a>
  ### 1.Description:
  ${data.description}

  <a name="lang"></a>
  ### 2.Languages used:
  ${data.lang}

  <a name="inst"></a>
  ## 3.Installation Instructions:
  ${data.instructions}
  
  <a name="use"></a>
  ## 4.Usage guidelines:
  ${data.usage}

  <a name="cont"></a>
  ## 5.Contribution Guidelines:
  ${data.contributions}

  <a name="test"></a>
  ## 6.Test Instructions:
  ${data.test}

${section}

  <a name="link"></a>
  ### 8.Links
  ${data.link}
`;
}

module.exports = generateMarkdown;
