import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BasicLayoutComponent} from './layouts/basic/basic-layout.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {AccordionModule} from "primeng/accordion";
import {AutoCompleteModule} from "primeng/autocomplete";
import {AvatarModule} from "primeng/avatar";
import {AvatarGroupModule} from "primeng/avatargroup";
import {BadgeModule} from "primeng/badge";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ChartModule} from "primeng/chart";
import {CheckboxModule} from "primeng/checkbox";
import {ChipsModule} from "primeng/chips";
import {ChipModule} from "primeng/chip";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ColorPickerModule} from "primeng/colorpicker";
import {ContextMenuModule} from "primeng/contextmenu";
import {DataViewModule} from "primeng/dataview";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {FieldsetModule} from "primeng/fieldset";
import {FileUploadModule} from "primeng/fileupload";
import {FullCalendarModule} from "@fullcalendar/angular";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {InplaceModule} from "primeng/inplace";
import {InputNumberModule} from "primeng/inputnumber";
import {InputMaskModule} from "primeng/inputmask";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {KnobModule} from "primeng/knob";
import {ListboxModule} from "primeng/listbox";
import {MegaMenuModule} from "primeng/megamenu";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {MultiSelectModule} from "primeng/multiselect";
import {OrderListModule} from "primeng/orderlist";
import {OrganizationChartModule} from "primeng/organizationchart";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {PaginatorModule} from "primeng/paginator";
import {PanelModule} from "primeng/panel";
import {PanelMenuModule} from "primeng/panelmenu";
import {PasswordModule} from "primeng/password";
import {PickListModule} from "primeng/picklist";
import {ProgressBarModule} from "primeng/progressbar";
import {RadioButtonModule} from "primeng/radiobutton";
import {RatingModule} from "primeng/rating";
import {RippleModule} from "primeng/ripple";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {ScrollTopModule} from "primeng/scrolltop";
import {SelectButtonModule} from "primeng/selectbutton";
import {SidebarModule} from "primeng/sidebar";
import {SkeletonModule} from "primeng/skeleton";
import {SlideMenuModule} from "primeng/slidemenu";
import {SliderModule} from "primeng/slider";
import {SplitButtonModule} from "primeng/splitbutton";
import {SplitterModule} from "primeng/splitter";
import {StepsModule} from "primeng/steps";
import {TagModule} from "primeng/tag";
import {TableModule} from "primeng/table";
import {TabMenuModule} from "primeng/tabmenu";
import {TabViewModule} from "primeng/tabview";
import {TerminalModule} from "primeng/terminal";
import {TieredMenuModule} from "primeng/tieredmenu";
import {TimelineModule} from "primeng/timeline";
import {ToastModule} from "primeng/toast";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ToolbarModule} from "primeng/toolbar";
import {TooltipModule} from "primeng/tooltip";
import {TreeModule} from "primeng/tree";
import {TreeTableModule} from "primeng/treetable";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {MenuComponent} from './components/menu/menu.component';
import {AppMenuitemComponent} from "./components/menu/app.menuitem.component";
import {ConfigComponent} from './components/config/config.component';
import {MenuService} from "./components/menu/app.menu.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PhoneMaskPipe} from './pipes/phone-mask.pipe';
import {SessionService} from "../core/session/session.service";
import {AuthService} from "../core/services/auth.service";
import { FormValidationErrorsComponent } from './components/form-validation-errors/form-validation-errors.component';

const PRIME_MODULES = [
  AccordionModule,
  AutoCompleteModule,
  AvatarModule,
  AvatarGroupModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  CarouselModule,
  CascadeSelectModule,
  ChartModule,
  CheckboxModule,
  ChipsModule,
  ChipModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  ColorPickerModule,
  ContextMenuModule,
  DataViewModule,
  DialogModule,
  DividerModule,
  DropdownModule,
  FieldsetModule,
  FileUploadModule,
  FullCalendarModule,
  GalleriaModule,
  ImageModule,
  InplaceModule,
  InputNumberModule,
  InputMaskModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  KnobModule,
  ListboxModule,
  MegaMenuModule,
  MenuModule,
  MenubarModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  OrganizationChartModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelModule,
  PanelMenuModule,
  PasswordModule,
  PickListModule,
  ProgressBarModule,
  RadioButtonModule,
  RatingModule,
  RippleModule,
  ScrollPanelModule,
  ScrollTopModule,
  SelectButtonModule,
  SidebarModule,
  SkeletonModule,
  SlideMenuModule,
  SliderModule,
  SplitButtonModule,
  SplitterModule,
  StepsModule,
  TagModule,
  TableModule,
  TabMenuModule,
  TabViewModule,
  TerminalModule,
  TieredMenuModule,
  TimelineModule,
  ToastModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  TreeTableModule,
  VirtualScrollerModule,
]

@NgModule({
  declarations: [
    BasicLayoutComponent,
    FullLayoutComponent,
    TopbarComponent,
    MenuComponent,
    AppMenuitemComponent,
    ConfigComponent,
    PhoneMaskPipe,
    FormValidationErrorsComponent,
  ],
  imports: [
    ...PRIME_MODULES,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  exports: [
    ...PRIME_MODULES,
    ReactiveFormsModule,
    PhoneMaskPipe,
    FormValidationErrorsComponent
  ],
  providers: [
    MenuService,
    SessionService,
    AuthService
  ]
})
export class SharedModule {
}