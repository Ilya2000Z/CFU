import React from "react";

export default function HeaderAdmin(){
    return(
        <div>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand col-lg-1 col-12" href="/"><img class="col-lg-12 col-12"></img></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Участники</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/adminCFU/admin/conf">Конференции</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">доклады</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
        </div>
    )
}