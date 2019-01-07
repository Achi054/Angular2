# Angular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Instructions

Angularjs need default tools to run angular application<br/><br/>

- Node version 6 or above<br/>
  Command to check node version<br/>
  `node -v`
- Nuget Package Manager, npm version 6 or above<br/>
  Command to check npm version<br/>
  `npm -v`<br/>
  Command to install npm<br/>
  `npm install -g`
- Angularjs boiler plates are defined in angular cli<br/>
  Command to install angular cli<br/>
  `npm install -g @angular/cli`<br/>
  Command to check angular cli info<br/>
  `ng -v`<br/>
  Command to validate angularjs path<br/>
  `npm list -g @angular/cli --depth=0`
- Create angular app with basic templates<br/>
  Command to create angularjs application<br/>
  `ng new app-name --skip-install`

## Component and templates
- Template can be defined inline or in a file<br/>
Inline using `template` within decorator `@Component`<br/>
File using `templateUrl`<br/>
- Templates do not render `script` tags as they may induce scripting attacks. In practice the script tag is ignored as part of template rendering.
- Expression context<br/>
Assign component property to HTML attribute using brackets<br/>
`<img [src]="angularImagePath" alt="DC Comics">`<br/>
where angularImagePath is a component property.
- Statement expression<br/>
Events are triggered using <br/>
`<button (click)='delete()'>x<button>`
- Binding syntax<br/>
Binding can be grouped as `source to view, view to source and two-way`
<table>
<tr><td>Source to View</td>
<td>{{Expression}} or [target]="expression" or bind-target="expression"</td>
</tr>
<tr>
<td>View to Source</td>
<td>(target)="statement" or on-target="statement"</td>
</tr>
<tr>
<td>Two Way</td>
<td>[(target)]="expression" or bindon-target="expression"</td>
</tr>
</table>

- Passing data to child from parent<br/>
`@Input property-name`<br/>

- Class attribute<br/>
`<p [class.col-green]="isGreen">`

- Emit event from child to parent<br/>
create event emiter `@Output() deleteRequest = new EventEmmiter<Hero>();`
<br/>

On delete click, emit hero object 
```
delete() { 
  this.deleteRequest.emit(this.hero); 
}
```
In component element of parent handle deleteRequest<br/>
`<app-hero-component (deleteRequest)="deleteHero($event)" />`<br/>
- [Built-in attribute directive](https://angular.io/guide/template-syntax#built-in-attribute-directives)<br/>

  - [NgClass](https://angular.io/guide/template-syntax#ngclass)<br/>
For single css class setter, 
`<div [class.special]="isSpecial">The class binding is special</div>`<br/>
For multi-class setter, 
`<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special</div>` where 
`currentClass` is a object property containing all the class names and boolean value.<br/>

  - [NgStyle](https://angular.io/guide/template-syntax#ngstyle)<br/>
For single style setter, 
`<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'" >This div is x-large or smaller.</div>`<br/>
For multi-style setter, 
`<div [ngStyle]="currentStyles">This div is initially italic, normal weight, and extra large (24px)</div>` where `currentStyle` is a object property containing all the style names and respective values.<br/>

  - [NgModel](https://angular.io/guide/template-syntax#ngmodel---two-way-binding-to-form-elements-with-ngmodel)<br/>
  `<input [(ngModel)]="currentHero.name">`
  <br/>

- [Built-in structural directives](https://angular.io/guide/template-syntax#built-in-structural-directives)<br/>
  - [NgIf](https://angular.io/guide/template-syntax#ngif)<br/>
`<app-hero-detail *ngIf="isActive"></app-hero-detail>`<br/><br/>

  - [NgForOf](https://angular.io/guide/template-syntax#ngforof) <br/>
`<div *ngFor="let hero of heroes">{{hero.name}}</div>`<br/>
The string assigned to *ngFor is not a template expression. It's a microsyntax — a little language of its own that Angular interprets. The string "let hero of heroes" means:
Take each hero in the heroes array, store it in the local hero looping variable, and make it available to the templated HTML for each iteration.<br/>

- [Template input variable](https://angular.io/guide/template-syntax#template-input-variables)<br/>
  - [NgFor with index](https://angular.io/guide/template-syntax#template-input-variables), <br/>
  `<div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>`
  <br/><br/>

  - [NgFor with trackby](https://angular.io/guide/template-syntax#ngfor-with-trackby), <br/>`<div *ngFor="let hero of heroes; trackBy: trackByHeroes">({{hero.id}}) {{hero.name}}</div>` where 
  `trackByHeroes` is used as function in component<br/>
  `trackByHeroes(index: number, hero: Hero): number { return hero.id; }`<br/><br/>

  - [NgSwitch](https://angular.io/guide/template-syntax#the-ngswitch-directives), <br/>

    ```
    <div [ngSwitch]="currentHero.emotion">
      <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
      <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
      <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
      <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
    </div>
    ```

- [Template reference variables](https://angular.io/guide/template-syntax#template-reference-variables--var-)<br/>
A template reference variable is often a reference to a DOM element within a template.<br/>
`<input #phone placeholder="phone number">`<br/>
`<button (click)="callPhone(phone.value)">Call</button>`<br/>

- [Input and Output properties](https://angular.io/guide/template-syntax#input-and-output-properties)<br/>

- [Template expression operators](https://angular.io/guide/template-syntax#template-expression-operators)<br/>

- [Template expression operator](https://angular.io/guide/template-syntax#template-expression-operators)<br/>
  - [Pipe operator ( | )](https://angular.io/guide/template-syntax#the-pipe-operator---)
  - [Safe navigation operator and null property paths](https://angular.io/guide/template-syntax#the-safe-navigation-operator----and-null-property-paths)
  - [Non-null assertion operator ( ! )](https://angular.io/guide/template-syntax#the-safe-navigation-operator----and-null-property-paths)

## User Input
- 




