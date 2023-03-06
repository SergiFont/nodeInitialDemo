const https = require('https')


const showPokemon = (req, res) => {
    const options = {
        hostname: 'pokeapi.co',
        path: '/api/v2/pokemon/ditto',
        method: 'GET',
        port: 443
      };
    
      const petition = https.request(options, apiRes => {
        console.log(`statusCode: ${apiRes.statusCode}`)
        
        // If the response is a 301 redirect
        if (apiRes.statusCode === 301) {
          const newUrl = apiRes.headers.location;
          console.log(`Resource has been moved to ${newUrl}`);
          // Redirect the request to the new URL
          const redirectRequest = https.request(newUrl, newRes => {
            console.log(`Redirect statusCode: ${newRes.statusCode}`);
            // Handle the response here
          });
          redirectRequest.end();
          return;
        }
        
        // Handle other response codes here
        apiRes.on('data', d => {
          process.stdout.write(d)
        })
      });
      
      petition.on('error', error => {
        console.error(error);
        res.statusCode = 500
        res.end()
      });
      
      petition.end();
    }

module.exports = showPokemon