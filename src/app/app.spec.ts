import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Demonstrações do estúdio', () => {
  it('permite alternar o período do dashboard ilustrativo', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    element.querySelectorAll<HTMLButtonElement>('.demo-tabs button')[1].click();
    await fixture.whenStable();
    expect(element.querySelector('.metric-row strong')?.textContent).toContain('12.400');
    element.querySelector<HTMLButtonElement>('.dashboard-top button')?.click();
    await fixture.whenStable();
    expect(element.querySelector('.metric-row strong')?.textContent).toContain('48.600');
    expect(element.querySelector('.dashboard-bottom')?.textContent).toContain('Dados ilustrativos');
  });
});
