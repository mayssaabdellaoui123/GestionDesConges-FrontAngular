import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { historique } from '../auth/Historique';
import { HistoriqueService } from '../historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  public historique: historique[];

  constructor(private HistoryService: HistoriqueService) { }

  ngOnInit(): void {
  }

  public getHistory(): void {
    this.HistoryService.getHistories().subscribe(
      (response: historique[]) => {
        this.historique = response;
        console.log(this.historique);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

}}
