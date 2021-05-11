const Airtable = require("airtable");

const { AT_API_URL, AT_API_KEY, AT_BASE_ID } = process.env;

Airtable.configure({
  endpointUrl: AT_API_URL,
  apiKey: AT_API_KEY,
});
const base = Airtable.base(AT_BASE_ID);

exports.handler = function (event, context, callback) {
  const send = (body) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    });
  };

  const data = [];

  base("cities")
    .select({
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          data.push(record.fields);
        });
        fetchNextPage();
        send(data);
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};
