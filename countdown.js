export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _diasAtuais() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStamp() {
    return this._futureDate.getTime() - this._diasAtuais.getTime();
  }
  get _dias() {
    return Math.floor(this._timeStamp / (24 * 60 * 60 * 1000));
  }
  get _horas() {
    return Math.floor(this._timeStamp / (60 * 60 * 1000));
  }
  get _minutos() {
    return Math.floor(this._timeStamp / (60 * 1000));
  }
  get _segundos() {
    return Math.floor(this._timeStamp / 1000);
  }
  get _mes() {
    return Math.floor(this._dias / 30);
  }
  get total() {
    const dias = this._dias;
    const horas = this._horas % 24;
    const minutos = this._minutos % 60;
    const segundos = this._segundos % 60;
    const mes = this._mes;
    return {
      dias,
      horas,
      minutos,
      segundos,
      mes,
    };
  }
}
