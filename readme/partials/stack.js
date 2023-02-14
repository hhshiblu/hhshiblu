const stack = [
 
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
 
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/atom/atom-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg',
]

const stackImages = stack
  .map(
    (imgUrl) =>
      `<a href="#" target="_blank" rel="noreferrer">
  <img src="${imgUrl}" alt="Stack" width="40" height="40"/>
</a>`
  )
  .join('')

module.exports = { stackImages }
