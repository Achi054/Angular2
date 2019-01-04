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
`delete() { this.deleteRequest.emit(this.hero); }`



