import React from 'react'

import './style.css'

function PriceCard(props) {
    const card = props.card
    return (
        <div className="card">
            <div className="card-header">
                <p className="title">{card.title}</p>
                <h1 className="price">${card.price}<span className="month">/month</span></h1>
            </div>
            <hr />
            <div className="content">
                <p><i className="fa fa-check" aria-hidden="true"></i>{card.userLimit}</p>
                <p><i className="fa fa-check" aria-hidden="true"></i>{card.storage}storage</p>
                <p><i className="fa fa-check" aria-hidden="true"></i>Unlimited Public Projects</p>
                <p><i className="fa fa-check" aria-hidden="true"></i>Community Access</p>

                {
                    card.privateProjects.disabled ? (
                        <p className="disabled"> <i className="fa fa-times" aria-hidden="true"></i>{card.privateProjects.value} </p>
                    ) : (
                            <p> <i className="fa fa-check" aria-hidden="true"></i>{card.privateProjects.value} </p>
                        )
                }
                {
                    card.phoneSupport.disabled ? (
                        <p className="disabled"> <i className="fa fa-times" aria-hidden="true"></i>{card.phoneSupport.value}</p>
                    ) : (
                            <p> <i className="fa fa-check" aria-hidden="true"></i>{card.phoneSupport.value}</p>
                        )
                }
                {
                    card.subDomain.disabled ?
                        (

                            <p className="disabled"> <i className="fa fa-times" aria-hidden="true"></i>{card.subDomain.value}</p>

                        ) :
                        (
                            card.subDomain.value.split(" ")[0].toLowerCase() === "unlimited" ?
                                (
                                    <p> <i className="fa fa-check" aria-hidden="true"></i>
                                        <span className="unlimited">{card.subDomain.value.split(" ")[0]}</span>{" "}
                                        {card.subDomain.value.split(" ").slice(1,)}</p>
                                ) :
                                (
                                    <p> <i className="fa fa-check" aria-hidden="true"></i>{card.subDomain.value}</p>
                                )

                        )
                }
                {
                    card.statusReports.disabled ? (
                        <p className="disabled"> <i className="fa fa-times" aria-hidden="true"></i>{card.statusReports.value}</p>
                    ) : (
                            <p> <i className="fa fa-check" aria-hidden="true"></i>{card.statusReports.value}</p>
                        )
                }
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default PriceCard
