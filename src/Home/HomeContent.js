import Typical from 'react-typical'


const HomeContent = () => (
    <>
        <flex>
            <h2>
                <strong>
                    <Typical
                        steps={['Cześć! 👋, jestem Mati.\n' +
                        '                    Początkujący Fullstack Developer.', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </strong>
            </h2>
        </flex>
    </>
)

export default HomeContent;