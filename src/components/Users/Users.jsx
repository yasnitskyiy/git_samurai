import c from './Users.module.css'

const Users = (props) =>{
    if (props.users.length === 0){
        props.setUsers([
            {
                id: 0,
                photoURL: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
                isFollowed: false,
                fullName: 'Yurii',
                status: 'My status text text text lorem',
                location: {
                    city: 'Lviv',
                    country: 'Ukraine',
                },
            },
            {
                id: 1,
                photoURL: 'https://cdn-icons-png.flaticon.com/512/206/206853.png',
                isFollowed: true,
                fullName: 'Vlad',
                status: 'dfsdf dsf sd fsd fsd fsd f',
                location: {
                    city: 'Kyiv',
                    country: 'Ukraine',
                },
            },
            {
                id: 2,
                photoURL: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                isFollowed: false,
                fullName: 'Olena',
                status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid asperiores, commodi cum delectus dignissimos, ea odit officiis qui, quisquam ratione temporibus velit veritatis. Consequuntur culpa exercitationem hic illo sed.',
                location: {
                    city: 'Kharkiv',
                    country: 'Ukraine',
                },
            },
        ]);
    }

    return(
        <div >
            {
                props.users.map(u => <div key={u.id} className={c.user}>
                    <img className={c.userPhoto} src={u.photoURL} alt=""/>
                    <h2 className={c.fullName}>{u.fullName} <span className={c.location}>{u.location.country}, {u.location.city}</span></h2>
                    <p className={c.status}>{u.status}</p>
                    {
                        u.isFollowed
                            ? <button onClick={() =>{ props.follow(u.id) }} className={c.followBtn}>FOLLOW</button>
                            : <button onClick={() => { props.unfollow(u.id) }} className={c.unFollowBtn}>UNFOLLOW</button>
                    }
                </div>)
            }
        </div>
    );
};

export default Users;