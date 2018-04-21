import React, {Component} from 'react';

class Modal extends Component {
    state = {
        imageLoaded: false,
        modalState: 'closed',
        parentPosition: {},
        windowWidth: document.body.clientWidth
    };

    openModal = () => {
        if (this.state.modalState !== 'closed') return;

        this.setState({parentPosition: this.imageWrapper.getBoundingClientRect()});

        this.setState({modalState: 'opening'});
        setTimeout(() => {
            this.setState({modalState: 'open'});
        }, 10);
    };

    closeModal = () => {
        if (this.state.modalState !== 'open') return;

        this.setState({parentPosition: this.imageWrapper.getBoundingClientRect()});

        this.setState({modalState: 'closing'});
        setTimeout(() => {
            this.setState({modalState: 'closed'});
        }, 300);
    };

    handleResize = () => {
        this.setState({windowWidth: document.body.clientWidth});
    };

    componentDidMount() {
        // update state on resize
        window.addEventListener('resize', this.handleResize);
        // load the full image
    }

    componentWillUnMount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render () {

        const {className, thumbnail, image} = this.props;
        const {imageLoaded, modalState, parentPosition, windowWidth} = this.state;

        const modalWidth = windowWidth > 1000 ? '700px' : '70vw';
        const realModalWidth = windowWidth > 1000 ? 700 : (0.7 * windowWidth);
        const modalLeft = windowWidth > 1000 ? (windowWidth - 700) / 2 : '15vw';

        console.log(parentPosition.width/realModalWidth);

        const modalStyles = {
            modal: {
                position: 'fixed',
                display: 'none',
                transition: 'left .3s ease-in-out, top .3s ease-in-out, transform 0.3s ease',
                transformOrigin: '0px 0px',
                overflow: 'hidden',
                zIndex: '1000'
            },
            opening: {
                width: modalWidth,
                transform: `scale(${parentPosition.width/realModalWidth})`,
                top: parentPosition.top,
                left: parentPosition.x,
                display: 'block'
            },
            open: {
                position: 'relative',
                width: modalWidth,
                left: modalLeft,
                top: 50,
                transform: `scale(1)`,
                display: 'block',
            },
            closing: {
                width: modalWidth,
                transform: `scale(${parentPosition.width/realModalWidth})`,
                top: parentPosition.top,
                left: parentPosition.x,
                display: 'block'
            },
            closed: {
                display: 'none'
            }
        };

        const modalStyle = {...modalStyles.modal, ...modalStyles[modalState]};

        const backgroundStyle = {
            display: (modalState === 'closed') ? 'none' : 'block',
            transition: 'background 0.3s',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: (modalState === 'opening' || modalState === 'closing') ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.8)',
            zIndex: '999',
            paddingBottom: 100,
            overflow: 'scroll'
        };

        return (
            <div ref={(imageWrapper) => {this.imageWrapper = imageWrapper;}} className={className} >
                <img src={thumbnail} alt="" onClick={this.openModal}/>
                <div onClick={(e) => {if (e.target === this.modalWrapper) this.closeModal()}} style={backgroundStyle} ref={(modalWrapper) => {this.modalWrapper = modalWrapper}}>
                    <div className={`modal-wrapper ${modalState}`} style={modalStyle}>
                        <img style={(modalState === 'opening') ? {transform: 'scale(1.05)'} : {transform: 'scale(1.01)'}} src={thumbnail} alt="" onClick={this.openModal}/>
                        <button className="modal-close" onClick={this.closeModal}> </button>
                        {this.props.children && <div className="modal-content">
                            {this.props.children}
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
