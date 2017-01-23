import {Component} from '@angular/core';

@Component({
    templateUrl: './documentation.html',
    styles: [`
        .docs h1 {
            margin-top: 30px;
        }
        
        .docs pre {
            font-family: monospace;
            background-color: #e5f3fc;
            color: #474849;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }

        .docs p {
            line-height: 1.5;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
        }
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }`
    ]
})
export class Documentation {
}