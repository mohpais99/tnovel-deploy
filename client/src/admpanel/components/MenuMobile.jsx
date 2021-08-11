import React from 'react';
import routes from 'admpanel/Routes';
import { Link, useHistory } from 'react-router-dom';

function MenuMobile() {
    const history = useHistory()
    const path = history.location.pathname.split('/')

    const fetchRoute = (routes) => {
        let list = routes.filter(r => r.status === 0)
        return list.map((route, i) => {
            return (
                // <li className={path.includes(route.path) ? 'active' : ''}>
                //     <Link to={route.layout + '/' + route.path}>
                //         <i className={route.icon}></i>
                //         <span className="links-name">{route.name}</span>
                //     </Link>
                // </li>
                <Link key={i} className={`item ${path.includes(route.path) ? 'active' : ''} ${i == 2 ? 'archive' : ''}`} to={route.layout + '/' + route.path}>
                    <i className={`${route.icon} icon`}></i>
                </Link>
            )
        })
    }
    return (
        <div className="menu-mobile d-flex d-md-none">
            {fetchRoute(routes)}
            {/* <div className="item active">
                <i className="bx bxs-dashboard icon"></i>
            </div>
            <div className="item">
                <i className="bx bxs-dashboard icon"></i>
            </div>
            <div className="item archive">
                <i className="bx bxs-dashboard icon"></i>
            </div>
            <div className="item">
                <i className="bx bxs-dashboard icon"></i>
            </div>
            <div className="item">
                <i className="bx bxs-dashboard icon"></i>
            </div> */}
            {/* <a className="item " href="/book-list"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA+BJREFUWAntmM9LFGEYx2dXV3dTCzpkKghBQvbrVK4t6a5t5qFOQQTdonN0jIKwhOjYpUuniKB/oDrVrmlqEJYVCUE/sEMetAxDaNeffZ5xnuGd2V1PMwfBF9553vd5nnme7z7PM+88s5a1NTZZBCKV8A4ODlavrq7eRH6R2WzoFSORyGvm5Z6enk8G316Oj4/vWFhYOMG9vWtra1n09kA/V1VVXclkMoN+ff++IqB8Pn8DQwP+G4z9dF1dXXtnZ+df5fEj+rnnKjOhPKUAK8Tj8b2pVOqn8srR6nJMh3fBoW+i0egj1cNZE/M6++ZCoZCGPhEZYM47EZWtBYBZ9HLQj2xvsY6jf4n1Rj/SqggIA7scw89IzT1Zy8Bx3AFkqY7wAXNGKACmSM/Z7u7u96zXhJfL5XohPUyhGwKKohDIwLmdOkDG0un0hIIR46xfOE6SIyMjDRs5DBLQK8dRy9DQULvplJQ/l72AXVpakjRXHIEBIk1SL3aKVlZWJDXuIGJvkf0RBqA8MlfJWQQGiJqZxeYHsYvTk459mwBmlUVeNn6ZrWBcAgMkNrVWoBk5xww/rgzefurIPNdMNStQQDxpWisNRCJpelKZ8BYXFz0RNPUCBZRIJKSwi+LAXyvZbPYbkZsqJxOejkABcQr/w+moGIeWi4IdwQoyG1OggMQikbGdsiw5c1QG3U2NHbQR+C6BA+LMsQ9BnFZTK3I6u6O+vl6eNHniSlKqSoED4o3+DuNzjgNP2pLJ5G/SNVFOFhogHLpnDk5KDkEipxFM06rEFIjSwCMkhgGlj/++sbGxFnVmyljXzc/PHzNlsg4FUCwW05epVSwWPVEC7CizYDuPRj2y0AB1dXV9x7jMklcFrUyBtNkvYqinxkIDJIaNtJU4NWRHpeUVfR2hpEyM41TT1kg7ckgdCqUzUFmV9N+mLDRAtbW1eRzJE2f52xGnm/wlMt5xngiGBojXyBxRkjNJhqd44UvflBMBdeSRhQZInDH08e+enJysWWetX7WO2LXRjrSqLFRAegjibNvMzExKnQolVVpHFm2tG6VQAbW2tsqZ888B4KkV2pEf8L84suNCZYQKqK2tTXojbf7dKBC5yPDw8GFkdg8O6O0CRkb1Oim9ojTDjTuZp2kV9GUpRdik2qKj60oUfamjU8wjfA3LB+YBaBbayLQHOk91XREQCo+ZA8wO8t2hNxh0mk/jIWNfdslr5OHy8nI/TuuZt31KRdqVu5zeD5RfMWX8+jsoiYFpVXao/NnwEkN95ne9T8fdytcIQPq4R75kl5hfmfe5/1xNTU0TYK65yluLzRiB/0BNkkoZsUf/AAAAAElFTkSuQmCC" className="ui mini image"></a><a className="item add-book"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAjJJREFUWAntl71KA0EUhRMx6cRKNAiCIJYWFjbmDTQpDPgUeQPL4HtolyYWmsrCws5CH0AEbWJSiWilout3w1zY7E52Z0yyIOyFw529P2cPM7szu4VCbvkMjM5AEARlcAqewN5oNuMrI+YCr/bBYD9JRtGWpEniG6Biy5vYoFgs3o/Lw1Em1wEqIGAsvJ+gQW8Xn24Q1UAPuNihjZFGWabwzJxxvQtegVjqTA15KayCb+lwMKmrRwURs4kpSR25HeAuiuIrINYHdbCVgNhyUitiukCtw2AoRoVzHRU1/kGn+M0wHSmBq6cvVYxyUSvL92Pu9ajxmDcF4pqxZEKA+ugyxWZG26ktAcmrnWgu5rUC7yyI2knEyIMvb6PdfAXNVIxI9BE0czE+gjIR4yooMzEugjIV4yiohSg1n1c7+W2Sm9tM74S3vvbEL03NLX5kB1Y+iYPwPuMlZk6JPH2P0/or2mNEtokfmJyc6HKyywnvZH8VFCN3FUOdnJHWrwQbKbVDS1uy83AzHU7LRF0F6NfEZphDx/M68PRyYodFrdK/bTiSlmmJGl2VFcaxDzxfQe/mpsv4mhmHXZKYcN3Ysa+gY8O0YGG8IdbyeYAtHAUvQdzsDpKGjWhaMV3PafFNzJMLSpvC6AwNTMN6WuMf82Hevo0j+lBfUyS7aJN9RurHf4BL1s8WKdcN95nxQ2o7ItbAC5ilyU5t28Ps+igWUW0g/2bTNPnFkv++qv3OefSfzsAvosloZ/3jq0oAAAAASUVORK5CYII=" className="ui mini image"></a><a className="item"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAxxJREFUWAntVz2LE0EYTjZfJkgCBxbeeYUg12gjpAghCdkEG1FPLpWdYiliIdicFiJXyGF12HjgHxBRrxPJBwnmchCw0cJTsPFiIXeSFCHkY+PzbmbOTTL7kYQIpxmYnZl33ueZZ9+ZnZm12WbpiEXAPo7eUqnkr9frV4G9gnwOeZ7xVFB+RN7y+XyvQ6FQjdktFyMJKpfLrlqtdrvb7a5ihDmTUQ7sdvua3+/fCAaDLRPfw27LgvL5/IlWq/USyOgh2mbbxaBptL8z2ymITaK+pPEpuFyuVCwW+6mx6VYtCSoWi3ONRmMHg50hJojIo7iXSCR2RMzZbDYE38fIMdb/xev1hsLh8IHIX2szFQRSRyaTeQeQzIBrEPIAorpaosE6cHbgHsFO00spC9wF4Dq9pvgpic1/rLlc7jpaqhiQrSeTyftmYghNPsx3ndpIMuPqtXSehhGiRVytVr8Bu4D8AW8YxECKDpfQjEhJiFQZneeR9wKBwGmjRW4YIYihyJAYemOKzEhiGE4hLNWRFhhnryV4GgqC/2WG2Zdl+a0Ab8nEsPvMmXMKsYaC8Gb8891G3XAxCtmZkWG3qanhFEIMBQGh7sAgoR14oqTh4Lu6kM9QEBakj1Ao60L0CEbOwTn1oIaC9EDTtM8EmUV3FqGJIoRPVT1aUBgepGaDUD/n4Jx6GN0pwxXiGECLjGxPj8CqHUI4xyLjFkJ1BcF7FXuGk1CKoqi7rJDBopFzME5+JRlC9532ON0DuKIuw2sZwBXmXZEk6dYQcgwDRD0FjO/+dPvcwhX3DU7/KqdTI8AbEPMeQs7yNivnQfRqwDZxE+OkQJLCmJ9Q0o+Cmgan7Cvv+Itl35h9U0YicJk/6XQ6B4VORV+73VZw+f8xFfJ/lnRoyqy+aaFQWGo2m08cDsfzeDyuLnrcnVewWG+43e670Wh01yqX1q/vK9N2mNUx/9fgc6nT6VxMp9Mb2PiOQ8xNwqGPLvUPqT5qGnvx4m90E4NRFIjjDhcDYZ8RtWejCuH+YwuKRCIVj8cjg+gFRPyizOrx2ZfDw/tflL8B698FW7UEZPEAAAAASUVORK5CYII=" className="ui mini image"></a><a className="item"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA/BJREFUWAntlktIlFEUx50ZRyWrqU0PekmEpNiLJENHR2cgNFoUQRBYUIugrDZBtYgWubNaRC16EEJUEAVl7xaOT2QKomhhUQkZFGHYO2dyHvY7H9+V8XPG+b6poMIL9zvnnnvu//y/c58ZGePlH8uALV2+LS0tM4aGhnZRq20221wd5xX6tVgsdt7n8/Wmg50WodbW1ppoNHqFgBMSBYXUN+x1Xq/3XKL+sWyWCZGZWrLSSM0UYIJ3IW4ho2TGg+6jZlGlbx+kGkQ3WywR8vv9SyDyEHAHwd4h1xBQ2sOlvb29MBKJXMKvCJ9wZmamu6Ki4sGwQwrFnqLf2H0Ig5AJEtBtJCPOBO/OycmpRu3Hxwm5erGbLaYJBQKByYDWCDCBzrJoe5IFKS0tfUPfEb2/immekszXaDdNaGBgoED+WADsdnuTEcjYdjqdt8Wmj1lp7E/WNk0IEsM7yuFwfEkGGGePxOkT4/QxVdOE+NP3CoktP1/pySRrZ6bqY/e9VXoqaZpQZWVlN2AfBBBym1IB079D9/nucrkem/DXXEwTYmfFGHFGRkFoNQu1TkNI8OF42IB5nXQx7mJxcfFAAreEJkvnUEdHx9TBwUH5W7kqYgQ7xhY/qu+qjK6urlmhUGgbhA/QLz/bR/+isrKyPnRTxRIhQWxra1vG+riLOk3akAoj3kEiiFxA1bKOvZedtqq8vPw5NtPF9JQpRI/H8wh9BQEvIGMQcVLnoOdTFRl/VlZWqVUyjM+wnCEZpArraCF6JYQKkBORL7gq7umkldu4/L8zYHkNsU4cPDHyOX0Xk5rZtF1IF3KIhf4Z/TPyNWvpidvtfoku55fpYooQN/30YDC4lphy2HmQOSYjyIHoh9TV3NzcppKSkv5U48YkxC7KI/h+6haAtFegAfAH7U/ULwS14SdPFHlqJPIVcqezs7MPk7mkd1tSQs3NzbuI0WDIxiNsd7n5O7hgu71e72vhQaDhgr+9s7Mzj8OzEKOHdjW1SDng/432bt5TjcoWL0cRwtlOZs4jN+qOg4CcZU2ckNdg/GCzOnhLhQR1M2Mc+riTkNpuxBhFiMwcx2mnOEIkwNtnKwfdU+PAdNpy7ZDZRogt0fHryfLBeKwRhNg9K8Lh8H3d+TaE1ldVVYXiB/yqznRO4oK+CakKsKJMfxExnincEXcZ875X7+jjYqz93WQEmwX9lXtuIz/7laaD42OPHlMTIwhhWS5WnC9zMX7UPP7AR99lN3RoLaYKYyQ0T++w9GRQYFYkP61iqJja8BGEmFe1heMf6FbiWPFVMVTM0YRgfYraw866YwU5HV8W83Vi9SK1Z3E6GONj/ooM/AQvvoO+N+MLxwAAAABJRU5ErkJggg==" className="ui mini image"></a> */}
        </div>
    )
}

export default MenuMobile;
