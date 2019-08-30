const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Andrew and Jac wedding👰💒🏩🕊</h3>
          <h3>Please confirm! your food</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Will Attend</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">Will Not Attend</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
