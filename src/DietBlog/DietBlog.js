
import './DietBlog.css';


function Card({image, title}){
    return(
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
        </div>
    );

}

export default function DietBlog() {
    const blogPosts = [
    {
      "id": 101,
      "name": "wHz-93",
      "health": 94,
      "damage": 20,
      "armor": 63,
      "bot_class": "Support",
      "catchphrase": "1010010101001101100011000111101",
      "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.800Z",
      "updated_at": "2018-10-02T19:55:10.800Z"
    },
    {
      "id": 102,
      "name": "RyM-66",
      "health": 86,
      "damage": 36,
      "armor": 77,
      "bot_class": "Medic",
      "catchphrase": "0110011100000100011110100110011000011001",
      "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.827Z",
      "updated_at": "2018-10-02T19:55:10.827Z"
    },
    {
      "id": 103,
      "name": "P-24",
      "health": 88,
      "damage": 25,
      "armor": 60,
      "bot_class": "Witch",
      "catchphrase": "1100101001110111110010011010110",
      "avatar_url": "https://robohash.org/idetcumque.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.844Z",
      "updated_at": "2018-10-02T19:55:10.844Z"
    },
    {
      "id": 104,
      "name": "qq-69",
      "health": 74,
      "damage": 29,
      "armor": 95,
      "bot_class": "Defender",
      "catchphrase": "00011101001001000000101100001100110",
      "avatar_url": "https://robohash.org/corruptieaqueexcepturi.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.856Z",
      "updated_at": "2018-10-02T19:55:10.856Z"
    },
    {
      "id": 105,
      "name": "G`t-65",
      "health": 62,
      "damage": 98,
      "armor": 31,
      "bot_class": "Assault",
      "catchphrase": "010101111110111111101101010110010100101",
      "avatar_url": "https://robohash.org/nisinequequas.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.867Z",
      "updated_at": "2018-10-02T19:55:10.867Z"
    },
    {
      "id": 106,
      "name": "TI-09",
      "health": 81,
      "damage": 39,
      "armor": 52,
      "bot_class": "Support",
      "catchphrase": "00111100111001011111110010110111",
      "avatar_url": "https://robohash.org/etutprovident.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.887Z",
      "updated_at": "2018-10-02T19:55:10.887Z"
    },
    {
      "id": 107,
      "name": "XSf-63",
      "health": 97,
      "damage": 26,
      "armor": 58,
      "bot_class": "Support",
      "catchphrase": "0010110001011100111100101010101000",
      "avatar_url": "https://robohash.org/accusantiumetfacilis.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.899Z",
      "updated_at": "2018-10-02T19:55:10.899Z"
    },
    {
      "id": 108,
      "name": "m-76",
      "health": 65,
      "damage": 90,
      "armor": 38,
      "bot_class": "Assault",
      "catchphrase": "1101111100001011111011011001011110010000",
      "avatar_url": "https://robohash.org/blanditiisautlaudantium.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.915Z",
      "updated_at": "2018-10-02T19:55:10.915Z"
    },
    {
      "id": 109,
      "name": "hjk-40",
      "health": 75,
      "damage": 84,
      "armor": 31,
      "bot_class": "Witch",
      "catchphrase": "11010100110000100001110001100000010111101000001100",
      "avatar_url": "https://robohash.org/quirationerem.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.940Z",
      "updated_at": "2018-10-02T19:55:10.940Z"
    }
]


    return (
        <div>
            <h1>Diet Blog</h1>
            <div className="card-container">
            {blogPosts.map((post, index) => (
            <Card key={index} image={post.avatar_url} title={post.avatar_url} />
        ))}
        </div>
        </div>
    )
}
