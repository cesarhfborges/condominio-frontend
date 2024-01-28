import {Component, OnInit} from '@angular/core';
import {FullLayoutComponent} from "../../layouts/full/full-layout.component";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
    topbarThemes: any[];

    componentThemes: any[];

    topbarColor = 'light';

    componentColor = 'blue';

    constructor(public app: AppComponent, public layout: FullLayoutComponent) {}

    ngOnInit() {
        this.topbarThemes = [
            {name: 'blue', color: '#0388e5'},
            {name: 'light', color: '#ffffff'},
            {name: 'dark', color: '#4d5058'},
        ];

        this.componentThemes = [
            {name: 'blue', color: '#2196F3'},
            {name: 'green', color: '#4CAF50'},
            {name: 'orange', color: '#FFC107'},
            {name: 'purple', color: '#9552a0'},
        ];
    }

    changeTopbarTheme(theme) {
        this.topbarColor = theme;
        const element = document.getElementById('layout-css');
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = 'layout-' + theme + '.css';
        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    changeComponentTheme(theme: any) {
        this.componentColor = theme;
        const element = document.getElementById('theme-css');
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = 'theme-' + theme + '.css';
        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    replaceLink(linkElement: any, href: string) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    onConfigButtonClick(event: Event) {
        this.layout.configActive = !this.layout.configActive;
        this.layout.configClick = true;
        event.preventDefault();
    }
}
