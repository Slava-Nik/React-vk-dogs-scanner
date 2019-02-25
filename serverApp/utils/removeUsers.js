const axios = require('axios');
const token = "yourtoken";

const removeUser = async (group_id, user_id,  res) => {
        let vkRequest = `https://api.vk.com/method/groups.removeUser?group_id=${group_id}&user_id=${user_id}&access_token=${token}&v=5.92`;
        
        axios.get(vkRequest)
          .then(function (response) {
            res.send(true);
          })
          .catch(function (error) {
            console.log(error);
            res.send(false);
        });
}



module.exports = removeUser;
  
