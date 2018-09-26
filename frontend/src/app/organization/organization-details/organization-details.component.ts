import {Component, Inject, Input} from '@angular/core';

import {Organization} from '../organization.model';
import {environment} from '../../../environments/environment';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'volontulo-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss'],
})

export class OrganizationDetailsComponent {
  @Input() isUserOrgMember: boolean;
  @Input() organization: Organization;
  djangoRoot: string = environment.djangoRoot;

  constructor(private metaService: Meta)
  {
  }

  ngOnInit() {
    this.metaService.updateTag({ property: 'og:title', content: this.organization.name + ' - Volontulo. Portal dla wolontariuszy' });
    this.metaService.updateTag({ property: 'og:description', content: this.organization.description});
  }

}
