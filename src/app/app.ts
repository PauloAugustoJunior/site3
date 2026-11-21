import { Component, OnDestroy, computed, signal, viewChild } from '@angular/core';
import { Icon } from './ui/icon';
import { BriefDialog } from './ui/brief-dialog';
import { Reveal } from './ui/reveal';
@Component({
  selector: 'app-root',
  imports: [Icon, BriefDialog, Reveal],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class App implements OnDestroy {
  readonly menuOpen = signal(false);
  readonly selectedDemo = signal(0);
  readonly monthly = signal(false);
  readonly previewContact = signal(false);
  readonly automationStep = signal(0);
  readonly dialog = viewChild.required(BriefDialog);
  readonly year = new Date().getFullYear();
  private timers: ReturnType<typeof setTimeout>[] = [];
  readonly demos = [
    {
      label: 'Presença digital',
      title: 'Uma boa primeira impressão abre portas.',
      text: 'Um site que apresenta sua marca com clareza, organiza seus serviços e facilita o contato. Feito para funcionar no computador e no celular.',
      tags: ['Design responsivo', 'Conteúdo com propósito', 'Contato facilitado'],
      service: 'Sites e landing pages',
      icon: 'globe',
    },
    {
      label: 'Dados & BI',
      title: 'Uma nova perspectiva sobre o seu negócio.',
      text: 'Informações dispersas viram um painel que faz sentido. Você acompanha os indicadores relevantes e tem mais contexto para decidir.',
      tags: ['Fontes conectadas', 'Indicadores claros', 'Visualização de dados'],
      service: 'Dados e Business Intelligence',
      icon: 'chart',
    },
    {
      label: 'Automação',
      title: 'Sua rotina pode fluir de um jeito melhor.',
      text: 'Uma nova solicitação pode virar um registro, uma tarefa e uma notificação. Conectamos etapas para deixar o trabalho repetitivo com a tecnologia.',
      tags: ['Sistemas integrados', 'Fluxos sob medida', 'Menos retrabalho'],
      service: 'Automações e integrações',
      icon: 'flow',
    },
  ];
  readonly demo = computed(() => this.demos[this.selectedDemo()]);
  readonly chartBars = computed(() =>
    this.monthly() ? [42, 67, 51, 82, 60, 94, 79] : [34, 55, 43, 72, 59, 90, 70],
  );
  start(service?: string) {
    this.menuOpen.set(false);
    this.dialog().open(service);
  }
  runAutomation() {
    if (this.automationStep() > 0 && this.automationStep() < 3) return;
    this.timers.forEach(clearTimeout);
    this.automationStep.set(1);
    this.timers = [
      setTimeout(() => this.automationStep.set(2), 700),
      setTimeout(() => this.automationStep.set(3), 1500),
    ];
  }
  ngOnDestroy() {
    this.timers.forEach(clearTimeout);
  }
}
