import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer Rffnk129ELS0wtQn7wb-omcGer-elbAZS1IlNbFbOkPLvzb6IcBTF6Cej71V9DDOPz--lNIGNkkAZvIjabXOS46GQOO9qVuGaISBL9naLBwwCwwnbj3kVn_1iVoUXnYx'
    }
});

