const mainelement = (reactcontent, container) => {
    const domelement = document.createElement(reactcontent.type)
    domelement.innerHTML = reactcontent.text
    domelement.setAttribute('href', reactcontent.props.href)
    domelement.setAttribute('target', reactcontent.props.target)
    container.appendChild(domelement)


}

const reactcontent = {
    type: 'a',
    props: {
        href: 'http://react.dev',
        target: '_blank'

    },
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nostrum sunt sapiente, saepe ducimus corporis possimus eveniet, vel, quidem placeat consequatur. Rerum mollitia error, modi praesentium repudiandae itaque dolore. Consequuntur, nemo consequatur eveniet, ullam, deserunt animi optio veritatis blanditiis distinctio sequi placeat earum reprehenderit numquam reiciendis minus sapiente dolore omnis modi. Labore animi, maxime iste, pariatur illo quae voluptatibus laudantium, nemo cupiditate numquam iure magnam molestias quisquam veritatis. Nam deserunt facilis culpa enim beatae. Cupiditate quod voluptas harum iure consequatur animi, sapiente libero ipsa quos repellendus quo perspiciatis mollitia deserunt eos saepe eveniet! Enim ex iure inventore eveniet atque architecto placeat assumenda aut consectetur praesentium, nam id eligendi neque quos nesciunt!"
}
const container = document.getElementById('root')

mainelement(reactcontent, container)
